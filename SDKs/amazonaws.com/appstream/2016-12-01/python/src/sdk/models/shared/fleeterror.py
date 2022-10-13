from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fleeterrorcode_enum


@dataclass_json
@dataclass
class FleetError:
    error_code: Optional[fleeterrorcode_enum.FleetErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    
