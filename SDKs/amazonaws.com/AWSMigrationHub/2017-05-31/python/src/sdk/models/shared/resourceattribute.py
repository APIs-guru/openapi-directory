from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import resourceattributetype_enum


@dataclass_json
@dataclass
class ResourceAttribute:
    type: resourceattributetype_enum.ResourceAttributeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
