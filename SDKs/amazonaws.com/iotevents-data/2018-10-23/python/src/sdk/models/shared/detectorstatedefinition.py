from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectorStateDefinition:
    r"""DetectorStateDefinition
    The new state, variable values, and timer settings of the detector (instance).
    """
    
    state_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    timers: List[TimerDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timers') }})
    variables: List[VariableDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
