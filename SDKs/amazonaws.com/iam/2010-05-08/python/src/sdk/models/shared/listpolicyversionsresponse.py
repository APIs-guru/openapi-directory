from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListPolicyVersionsResponse:
    r"""ListPolicyVersionsResponse
    Contains the response to a successful <a>ListPolicyVersions</a> request. 
    """
    
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    versions: Optional[List[PolicyVersion]] = field(default=None)
    
