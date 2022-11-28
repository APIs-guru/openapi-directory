from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListGroupsResponse:
    r"""ListGroupsResponse
    Contains the response to a successful <a>ListGroups</a> request. 
    """
    
    groups: List[Group] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
