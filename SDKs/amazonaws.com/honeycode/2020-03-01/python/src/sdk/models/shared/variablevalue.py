from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VariableValue:
    r"""VariableValue
    The input variables to the app to be used by the InvokeScreenAutomation action request.
    """
    
    raw_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawValue') }})
    
