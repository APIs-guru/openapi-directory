from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateCacheClusterResult:
    cache_cluster: Optional[CacheCluster] = field(default=None)
    
