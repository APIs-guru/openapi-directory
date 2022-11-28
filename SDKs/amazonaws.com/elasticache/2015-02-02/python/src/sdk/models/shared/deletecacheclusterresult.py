from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteCacheClusterResult:
    cache_cluster: Optional[CacheCluster] = field(default=None)
    
