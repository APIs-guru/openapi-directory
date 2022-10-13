from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BuildSystemSharedDtoParameterValueDirectionEnum(str, Enum):
    INPUT = "Input"
    OUTPUT = "Output"


@dataclass_json
@dataclass
class BuildSystemSharedDtoParameterValue:
    direction: Optional[BuildSystemSharedDtoParameterValueDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Direction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
