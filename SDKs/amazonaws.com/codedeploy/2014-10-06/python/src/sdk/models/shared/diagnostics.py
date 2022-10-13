from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lifecycleerrorcode_enum


@dataclass_json
@dataclass
class Diagnostics:
    error_code: Optional[lifecycleerrorcode_enum.LifecycleErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    log_tail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logTail' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptName' }})
    
