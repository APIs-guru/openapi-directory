from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetGroupResponse:
    r"""GetGroupResponse
    Contains the response to a successful <a>GetGroup</a> request. 
    """
    
    group: Group = field()
    users: List[User] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
