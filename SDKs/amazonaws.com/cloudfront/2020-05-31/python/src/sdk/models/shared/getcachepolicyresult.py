from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetCachePolicyResult:
    cache_policy: Optional[CachePolicy] = field(default=None)
    
