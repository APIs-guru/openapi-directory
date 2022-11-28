from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListCachePoliciesResult:
    cache_policy_list: Optional[CachePolicyList] = field(default=None)
    
