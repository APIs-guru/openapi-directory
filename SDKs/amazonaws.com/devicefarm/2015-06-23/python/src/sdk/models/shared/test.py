from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import counters
from . import deviceminutes
from . import executionresult_enum
from . import executionstatus_enum
from . import testtype_enum


@dataclass_json
@dataclass
class Test:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    counters: Optional[counters.Counters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counters' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_minutes: Optional[deviceminutes.DeviceMinutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMinutes' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[executionresult_enum.ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stopped: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopped', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[testtype_enum.TestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
