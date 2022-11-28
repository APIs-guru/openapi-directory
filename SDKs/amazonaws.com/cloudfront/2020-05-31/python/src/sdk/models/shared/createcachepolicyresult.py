from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateCachePolicyResult:
    cache_policy: Optional[CachePolicy] = field(default=None)
    
