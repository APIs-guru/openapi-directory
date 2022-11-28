from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnInputLifecycle:
    r"""OnInputLifecycle
    Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
    """
    
    events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    transition_events: Optional[List[TransitionEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionEvents') }})
    
