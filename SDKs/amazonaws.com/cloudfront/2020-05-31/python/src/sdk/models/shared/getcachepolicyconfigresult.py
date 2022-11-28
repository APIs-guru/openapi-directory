from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetCachePolicyConfigResult:
    cache_policy_config: Optional[CachePolicyConfig] = field(default=None)
    
