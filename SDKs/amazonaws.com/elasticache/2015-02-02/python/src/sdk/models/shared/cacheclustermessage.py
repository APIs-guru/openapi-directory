from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheClusterMessage:
    r"""CacheClusterMessage
    Represents the output of a <code>DescribeCacheClusters</code> operation.
    """
    
    cache_clusters: Optional[List[CacheCluster]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
