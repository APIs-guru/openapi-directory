from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import event
from . import transitionevent


@dataclass_json
@dataclass
class OnInputLifecycle:
    events: Optional[List[event.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    transition_events: Optional[List[transitionevent.TransitionEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionEvents' }})
    
