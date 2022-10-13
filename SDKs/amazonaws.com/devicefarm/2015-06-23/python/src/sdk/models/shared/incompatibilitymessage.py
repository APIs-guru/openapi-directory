from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceattribute_enum


@dataclass_json
@dataclass
class IncompatibilityMessage:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    type: Optional[deviceattribute_enum.DeviceAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
