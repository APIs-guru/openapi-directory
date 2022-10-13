from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import task


@dataclass_json
@dataclass
class NotifyMigrationTaskStateRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    migration_task_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    next_update_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextUpdateSeconds' }})
    progress_update_stream: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    task: task.Task = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Task' }})
    update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
