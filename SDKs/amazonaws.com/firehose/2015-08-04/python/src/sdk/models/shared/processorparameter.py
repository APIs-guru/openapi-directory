from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessorParameter:
    r"""ProcessorParameter
    Describes the processor parameter.
    """
    
    parameter_name: ProcessorParameterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }})
    parameter_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterValue') }})
    
