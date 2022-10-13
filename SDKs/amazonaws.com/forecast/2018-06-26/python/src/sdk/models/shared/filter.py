from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import filterconditionstring_enum


@dataclass_json
@dataclass
class Filter:
    condition: filterconditionstring_enum.FilterConditionStringEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
