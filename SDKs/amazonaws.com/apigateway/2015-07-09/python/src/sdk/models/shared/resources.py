from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resource


@dataclass_json
@dataclass
class Resources:
    items: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
