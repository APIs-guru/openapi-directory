from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagestatus_enum


@dataclass_json
@dataclass
class ImageState:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[imagestatus_enum.ImageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
