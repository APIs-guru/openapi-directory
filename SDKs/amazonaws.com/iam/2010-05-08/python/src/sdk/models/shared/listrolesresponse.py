from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListRolesResponse:
    r"""ListRolesResponse
    Contains the response to a successful <a>ListRoles</a> request. 
    """
    
    roles: List[Role] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
