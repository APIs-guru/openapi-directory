from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import approval


@dataclass_json
@dataclass
class GetPullRequestApprovalStatesOutput:
    approvals: Optional[List[approval.Approval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvals' }})
    
