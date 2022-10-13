from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import eventbatchingcondition
from . import predicate
from . import triggertype_enum


@dataclass_json
@dataclass
class CreateTriggerRequest:
    actions: List[action.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_batching_condition: Optional[eventbatchingcondition.EventBatchingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBatchingCondition' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    predicate: Optional[predicate.Predicate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predicate' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    start_on_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartOnCreation' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: triggertype_enum.TriggerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowName' }})
    
