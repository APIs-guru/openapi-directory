from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComponentParameterDetail:
    default_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
