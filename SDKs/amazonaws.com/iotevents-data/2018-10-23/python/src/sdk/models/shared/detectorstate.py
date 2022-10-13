from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import timer
from . import variable


@dataclass_json
@dataclass
class DetectorState:
    state_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateName' }})
    timers: List[timer.Timer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timers' }})
    variables: List[variable.Variable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    
