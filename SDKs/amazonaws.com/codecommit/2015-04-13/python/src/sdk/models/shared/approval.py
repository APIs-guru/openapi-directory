from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Approval:
    r"""Approval
    Returns information about a specific approval on a pull request.
    """
    
    approval_state: Optional[ApprovalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalState') }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    
