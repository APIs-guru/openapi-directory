from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tagfiltertype_enum


@dataclass_json
@dataclass
class TagFilter:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: Optional[tagfiltertype_enum.TagFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
