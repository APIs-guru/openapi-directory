from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransitionEvent:
    r"""TransitionEvent
    Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
    """
    
    condition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    event_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    next_state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextState') }})
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    
