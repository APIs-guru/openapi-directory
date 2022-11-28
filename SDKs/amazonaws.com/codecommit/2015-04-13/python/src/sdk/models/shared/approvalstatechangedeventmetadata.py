from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApprovalStateChangedEventMetadata:
    r"""ApprovalStateChangedEventMetadata
    Returns information about a change in the approval state for a pull request.
    """
    
    approval_status: Optional[ApprovalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalStatus') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
