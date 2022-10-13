from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import targettype_enum


@dataclass_json
@dataclass
class ShareTarget:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    type: targettype_enum.TargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
