from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeUserGroupsResult:
    marker: Optional[str] = field(default=None)
    user_groups: Optional[List[UserGroup]] = field(default=None)
    
