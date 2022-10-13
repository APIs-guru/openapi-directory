from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fleeterrorcode_enum


@dataclass_json
@dataclass
class ResourceError:
    error_code: Optional[fleeterrorcode_enum.FleetErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    error_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
