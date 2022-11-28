from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskExecutionResultDetail:
    r"""TaskExecutionResultDetail
    Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
    """
    
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    prepare_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrepareDuration') }})
    prepare_status: Optional[PhaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrepareStatus') }})
    total_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalDuration') }})
    transfer_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferDuration') }})
    transfer_status: Optional[PhaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferStatus') }})
    verify_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifyDuration') }})
    verify_status: Optional[PhaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifyStatus') }})
    
