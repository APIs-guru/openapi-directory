from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotifyMigrationTaskStateRequest:
    migration_task_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    next_update_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextUpdateSeconds') }})
    progress_update_stream: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    task: Task = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Task') }})
    update_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
