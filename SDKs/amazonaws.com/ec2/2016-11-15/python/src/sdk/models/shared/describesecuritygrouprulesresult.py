from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSecurityGroupRulesResult:
    next_token: Optional[str] = field(default=None)
    security_group_rules: Optional[List[SecurityGroupRule]] = field(default=None)
    
