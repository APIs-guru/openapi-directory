from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSecurityGroupsResult:
    next_token: Optional[str] = field(default=None)
    security_groups: Optional[List[SecurityGroup]] = field(default=None)
    
