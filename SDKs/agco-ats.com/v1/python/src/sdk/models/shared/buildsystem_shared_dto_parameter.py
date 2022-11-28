from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BuildSystemSharedDtoParameterDirectionEnum(str, Enum):
    INPUT = "Input"
    OUTPUT = "Output"

class BuildSystemSharedDtoParameterTypeEnum(str, Enum):
    STRING = "String"
    BOOLEAN = "Boolean"
    INTEGER = "Integer"
    FLOAT = "Float"
    STRING_DICTIONARY = "StringDictionary"


@dataclass_json
@dataclass
class BuildSystemSharedDtoParameter:
    r"""BuildSystemSharedDtoParameter
    A DTO for an IParameter
    """
    
    direction: Optional[BuildSystemSharedDtoParameterDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: Optional[BuildSystemSharedDtoParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
