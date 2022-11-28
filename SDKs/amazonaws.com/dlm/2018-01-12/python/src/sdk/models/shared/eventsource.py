from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventSource:
    r"""EventSource
    Specifies an event that triggers an event-based policy.
    """
    
    type: EventSourceValuesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    parameters: Optional[EventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
