from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TriggerUpdate:
    r"""TriggerUpdate
    A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
    """
    
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_batching_condition: Optional[EventBatchingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBatchingCondition') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    predicate: Optional[Predicate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predicate') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    
