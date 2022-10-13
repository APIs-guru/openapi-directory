from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import detectmitigationactionexecutionstatus_enum


@dataclass_json
@dataclass
class DetectMitigationActionExecution:
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    execution_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: Optional[detectmitigationactionexecutionstatus_enum.DetectMitigationActionExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    violation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationId' }})
    
