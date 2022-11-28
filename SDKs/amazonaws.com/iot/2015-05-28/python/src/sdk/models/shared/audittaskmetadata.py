from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditTaskMetadata:
    r"""AuditTaskMetadata
    The audits that were performed.
    """
    
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: Optional[AuditTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    task_type: Optional[AuditTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    
