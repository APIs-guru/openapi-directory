from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import auditmitigationactionstaskstatus_enum


@dataclass_json
@dataclass
class AuditMitigationActionsTaskMetadata:
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_status: Optional[auditmitigationactionstaskstatus_enum.AuditMitigationActionsTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatus' }})
    
