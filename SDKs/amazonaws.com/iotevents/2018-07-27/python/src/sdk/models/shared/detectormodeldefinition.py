from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectorModelDefinition:
    r"""DetectorModelDefinition
    Information that defines how a detector operates.
    """
    
    initial_state_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialStateName') }})
    states: List[State] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
