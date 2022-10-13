from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import experimentactionstatus_enum


@dataclass_json
@dataclass
class ExperimentActionState:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[experimentactionstatus_enum.ExperimentActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
