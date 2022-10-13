from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import remediationexecutionstepstate_enum


@dataclass_json
@dataclass
class RemediationExecutionStep:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[remediationexecutionstepstate_enum.RemediationExecutionStepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    stop_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
