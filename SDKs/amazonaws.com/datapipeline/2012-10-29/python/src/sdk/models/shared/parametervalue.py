from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParameterValue:
    r"""ParameterValue
    A value or list of parameter values. 
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    string_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
