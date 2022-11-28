from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SystemEvent:
    r"""SystemEvent
    Contains information about alarm state changes.
    """
    
    event_type: Optional[EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    state_change_configuration: Optional[StateChangeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeConfiguration') }})
    
