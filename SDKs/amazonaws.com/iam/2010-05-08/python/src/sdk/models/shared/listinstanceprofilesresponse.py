from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListInstanceProfilesResponse:
    r"""ListInstanceProfilesResponse
    Contains the response to a successful <a>ListInstanceProfiles</a> request. 
    """
    
    instance_profiles: List[InstanceProfile] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
