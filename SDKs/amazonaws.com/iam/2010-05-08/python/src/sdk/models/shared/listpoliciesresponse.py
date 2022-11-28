from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListPoliciesResponse:
    r"""ListPoliciesResponse
    Contains the response to a successful <a>ListPolicies</a> request. 
    """
    
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    policies: Optional[List[Policy]] = field(default=None)
    
