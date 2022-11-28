from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AuthorizeSecurityGroupIngressResult:
    return_: Optional[bool] = field(default=None)
    security_group_rules: Optional[List[SecurityGroupRule]] = field(default=None)
    
