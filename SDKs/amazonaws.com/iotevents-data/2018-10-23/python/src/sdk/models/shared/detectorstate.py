from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectorState:
    r"""DetectorState
    Information about the current state of the detector instance.
    """
    
    state_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    timers: List[Timer] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timers') }})
    variables: List[Variable] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
