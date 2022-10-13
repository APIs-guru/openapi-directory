from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import event


@dataclass_json
@dataclass
class OnEnterLifecycle:
    events: Optional[List[event.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    
