from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import approvalstate_enum


@dataclass_json
@dataclass
class UpdatePullRequestApprovalStateInput:
    approval_state: approvalstate_enum.ApprovalStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalState' }})
    pull_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestId' }})
    revision_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
