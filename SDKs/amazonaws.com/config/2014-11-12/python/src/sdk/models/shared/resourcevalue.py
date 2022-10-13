from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import resourcevaluetype_enum


@dataclass_json
@dataclass
class ResourceValue:
    value: resourcevaluetype_enum.ResourceValueTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
