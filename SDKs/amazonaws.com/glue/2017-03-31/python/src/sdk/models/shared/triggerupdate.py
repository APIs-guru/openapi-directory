from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import eventbatchingcondition
from . import predicate


@dataclass_json
@dataclass
class TriggerUpdate:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_batching_condition: Optional[eventbatchingcondition.EventBatchingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBatchingCondition' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    predicate: Optional[predicate.Predicate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predicate' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    
