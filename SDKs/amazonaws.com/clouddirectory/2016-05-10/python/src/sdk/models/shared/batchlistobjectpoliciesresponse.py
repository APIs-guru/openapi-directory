from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchListObjectPoliciesResponse:
    r"""BatchListObjectPoliciesResponse
    Represents the output of a <a>ListObjectPolicies</a> response operation.
    """
    
    attached_policy_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedPolicyIds') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
