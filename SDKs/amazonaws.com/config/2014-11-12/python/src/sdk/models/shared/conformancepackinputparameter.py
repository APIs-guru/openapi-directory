from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConformancePackInputParameter:
    r"""ConformancePackInputParameter
    Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
    """
    
    parameter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }})
    parameter_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterValue') }})
    
