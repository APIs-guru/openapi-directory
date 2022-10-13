from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class MigrationTaskSummary:
    migration_task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressPercent' }})
    progress_update_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetail' }})
    update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
