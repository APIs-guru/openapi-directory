from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListEntitiesForPolicyResponse:
    r"""ListEntitiesForPolicyResponse
    Contains the response to a successful <a>ListEntitiesForPolicy</a> request. 
    """
    
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    policy_groups: Optional[List[PolicyGroup]] = field(default=None)
    policy_roles: Optional[List[PolicyRole]] = field(default=None)
    policy_users: Optional[List[PolicyUser]] = field(default=None)
    
