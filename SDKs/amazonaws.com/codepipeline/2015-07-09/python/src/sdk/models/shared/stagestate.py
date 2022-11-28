from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StageState:
    r"""StageState
    Represents information about the state of the stage.
    """
    
    action_states: Optional[List[ActionState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionStates') }})
    inbound_execution: Optional[StageExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundExecution') }})
    inbound_transition_state: Optional[TransitionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundTransitionState') }})
    latest_execution: Optional[StageExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestExecution') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
