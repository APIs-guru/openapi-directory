from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventParameters:
    r"""EventParameters
    Specifies an event that triggers an event-based policy.
    """
    
    description_regex: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DescriptionRegex') }})
    event_type: EventTypeValuesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    snapshot_owner: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotOwner') }})
    
