from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeStaleSecurityGroupsResult:
    next_token: Optional[str] = field(default=None)
    stale_security_group_set: Optional[List[StaleSecurityGroup]] = field(default=None)
    
