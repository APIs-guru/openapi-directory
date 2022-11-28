from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class State:
    r"""State
    Information that defines a state of a detector.
    """
    
    state_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    on_enter: Optional[OnEnterLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onEnter') }})
    on_exit: Optional[OnExitLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onExit') }})
    on_input: Optional[OnInputLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onInput') }})
    
