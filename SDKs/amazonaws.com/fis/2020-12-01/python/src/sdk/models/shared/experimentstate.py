from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import experimentstatus_enum


@dataclass_json
@dataclass
class ExperimentState:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[experimentstatus_enum.ExperimentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
