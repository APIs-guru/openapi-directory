from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventInfo:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
