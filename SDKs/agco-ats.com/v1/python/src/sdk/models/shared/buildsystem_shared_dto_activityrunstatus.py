from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BuildSystemSharedDtoActivityRunStatusStatusEnum(str, Enum):
    READY = "Ready"
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    CANCELLED = "Cancelled"
    FAILED = "Failed"


@dataclass_json
@dataclass
class BuildSystemSharedDtoActivityRunStatus:
    r"""BuildSystemSharedDtoActivityRunStatus
    A DTO for an IActivityRunStatus
    """
    
    current_step: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentStep') }, 'form': { 'field_name': 'CurrentStep' }})
    status: Optional[BuildSystemSharedDtoActivityRunStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    step_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepProgress') }, 'form': { 'field_name': 'StepProgress' }})
    step_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepStatus') }, 'form': { 'field_name': 'StepStatus' }})
    
