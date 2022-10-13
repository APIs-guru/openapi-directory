from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action


@dataclass_json
@dataclass
class Event:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    event_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    
