from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import approvalstate_enum


@dataclass_json
@dataclass
class Approval:
    approval_state: Optional[approvalstate_enum.ApprovalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalState' }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    
