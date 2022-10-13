from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FilterActivity:
    filter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    
