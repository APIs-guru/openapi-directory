from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListUsersResponse:
    r"""ListUsersResponse
    Contains the response to a successful <a>ListUsers</a> request. 
    """
    
    users: List[User] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
