from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import state


@dataclass_json
@dataclass
class DetectorModelDefinition:
    initial_state_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialStateName' }})
    states: List[state.State] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'states' }})
    
