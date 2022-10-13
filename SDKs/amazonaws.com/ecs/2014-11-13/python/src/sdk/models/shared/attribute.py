from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targettype_enum


@dataclass_json
@dataclass
class Attribute:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    target_type: Optional[targettype_enum.TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
