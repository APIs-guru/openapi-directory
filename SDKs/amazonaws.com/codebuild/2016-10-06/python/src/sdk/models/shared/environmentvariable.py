from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import environmentvariabletype_enum


@dataclass_json
@dataclass
class EnvironmentVariable:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[environmentvariabletype_enum.EnvironmentVariableTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
