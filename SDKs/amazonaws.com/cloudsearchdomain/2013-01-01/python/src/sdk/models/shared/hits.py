from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hit


@dataclass_json
@dataclass
class Hits:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'found' }})
    hit: Optional[List[hit.Hit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hit' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
