from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetVariableAction:
    r"""SetVariableAction
    Information about the variable and its new value.
    """
    
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    variable_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableName') }})
    
