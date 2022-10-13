from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import environmentfiletype_enum


@dataclass_json
@dataclass
class EnvironmentFile:
    type: environmentfiletype_enum.EnvironmentFileTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
