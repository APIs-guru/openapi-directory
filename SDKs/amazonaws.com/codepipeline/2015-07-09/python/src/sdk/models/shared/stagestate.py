from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionstate
from . import stageexecution
from . import transitionstate
from . import stageexecution


@dataclass_json
@dataclass
class StageState:
    action_states: Optional[List[actionstate.ActionState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionStates' }})
    inbound_execution: Optional[stageexecution.StageExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundExecution' }})
    inbound_transition_state: Optional[transitionstate.TransitionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundTransitionState' }})
    latest_execution: Optional[stageexecution.StageExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestExecution' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    
