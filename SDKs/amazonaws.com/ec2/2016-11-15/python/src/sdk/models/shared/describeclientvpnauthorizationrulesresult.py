from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeClientVpnAuthorizationRulesResult:
    authorization_rules: Optional[List[AuthorizationRule]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
