from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListOriginRequestPoliciesResult:
    origin_request_policy_list: Optional[OriginRequestPolicyList] = field(default=None)
    
