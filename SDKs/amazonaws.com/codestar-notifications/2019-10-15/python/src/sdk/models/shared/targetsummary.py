from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targetstatus_enum


@dataclass_json
@dataclass
class TargetSummary:
    target_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetAddress' }})
    target_status: Optional[targetstatus_enum.TargetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetStatus' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
