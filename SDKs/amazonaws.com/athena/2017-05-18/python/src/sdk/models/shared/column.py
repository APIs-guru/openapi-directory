from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Column:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
