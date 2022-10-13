from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errordetails
from . import actionexecutionstatus_enum


@dataclass_json
@dataclass
class ActionExecution:
    action_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionExecutionId' }})
    error_details: Optional[errordetails.ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDetails' }})
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionId' }})
    external_execution_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionUrl' }})
    last_status_change: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusChange', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedBy' }})
    percent_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentComplete' }})
    status: Optional[actionexecutionstatus_enum.ActionExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
