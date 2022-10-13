from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetVariableAction:
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    variable_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variableName' }})
    
