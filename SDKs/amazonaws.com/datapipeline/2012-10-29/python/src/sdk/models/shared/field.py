from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Field:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    ref_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
