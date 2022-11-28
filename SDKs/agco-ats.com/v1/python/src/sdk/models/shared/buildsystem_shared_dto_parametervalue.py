from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BuildSystemSharedDtoParameterValueDirectionEnum(str, Enum):
    INPUT = "Input"
    OUTPUT = "Output"


@dataclass_json
@dataclass
class BuildSystemSharedDtoParameterValue:
    r"""BuildSystemSharedDtoParameterValue
    A DTO for an IParameterValue
    """
    
    direction: Optional[BuildSystemSharedDtoParameterValueDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
