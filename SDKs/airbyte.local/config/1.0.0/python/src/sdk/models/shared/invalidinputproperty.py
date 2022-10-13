from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvalidInputProperty:
    invalid_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidValue' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    property_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyPath' }})
    
