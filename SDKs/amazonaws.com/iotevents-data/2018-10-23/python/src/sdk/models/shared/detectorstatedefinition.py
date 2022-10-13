from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import timerdefinition
from . import variabledefinition


@dataclass_json
@dataclass
class DetectorStateDefinition:
    state_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateName' }})
    timers: List[timerdefinition.TimerDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timers' }})
    variables: List[variabledefinition.VariableDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    
