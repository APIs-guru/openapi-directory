from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cancelstepsrequeststatus_enum


@dataclass_json
@dataclass
class CancelStepsInfo:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    status: Optional[cancelstepsrequeststatus_enum.CancelStepsRequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepId' }})
    
