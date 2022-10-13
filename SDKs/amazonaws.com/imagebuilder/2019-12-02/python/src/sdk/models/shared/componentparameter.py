from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComponentParameter:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
