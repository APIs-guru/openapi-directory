from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheSubnetGroupMessage:
    r"""CacheSubnetGroupMessage
    Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
    """
    
    cache_subnet_groups: Optional[List[CacheSubnetGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
