from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListUserPoliciesResponse:
    r"""ListUserPoliciesResponse
    Contains the response to a successful <a>ListUserPolicies</a> request. 
    """
    
    policy_names: List[str] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
