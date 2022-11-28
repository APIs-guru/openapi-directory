from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTriggerRequest:
    actions: List[Action] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: TriggerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_batching_condition: Optional[EventBatchingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBatchingCondition') }})
    predicate: Optional[Predicate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predicate') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    start_on_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartOnCreation') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowName') }})
    
