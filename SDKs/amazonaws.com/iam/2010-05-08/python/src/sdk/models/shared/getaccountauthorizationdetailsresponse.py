from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetAccountAuthorizationDetailsResponse:
    r"""GetAccountAuthorizationDetailsResponse
    Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request. 
    """
    
    group_detail_list: Optional[List[GroupDetail]] = field(default=None)
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    policies: Optional[List[ManagedPolicyDetail]] = field(default=None)
    role_detail_list: Optional[List[RoleDetail]] = field(default=None)
    user_detail_list: Optional[List[UserDetail]] = field(default=None)
    
