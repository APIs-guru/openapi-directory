from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    direction: Optional[BuildSystemSharedDtoParameterDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Direction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[BuildSystemSharedDtoParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
