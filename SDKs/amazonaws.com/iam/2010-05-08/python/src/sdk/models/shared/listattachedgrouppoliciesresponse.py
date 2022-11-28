from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListAttachedGroupPoliciesResponse:
    r"""ListAttachedGroupPoliciesResponse
    Contains the response to a successful <a>ListAttachedGroupPolicies</a> request. 
    """
    
    attached_policies: Optional[List[AttachedPolicy]] = field(default=None)
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
