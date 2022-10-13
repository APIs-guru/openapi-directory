from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ssestatus_enum


@dataclass_json
@dataclass
class SseDescription:
    status: Optional[ssestatus_enum.SseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
