from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import eventbatchingcondition
from . import predicate
from . import triggerstate_enum
from . import triggertype_enum


@dataclass_json
@dataclass
class Trigger:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_batching_condition: Optional[eventbatchingcondition.EventBatchingCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBatchingCondition' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    predicate: Optional[predicate.Predicate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predicate' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    state: Optional[triggerstate_enum.TriggerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    type: Optional[triggertype_enum.TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowName' }})
    
