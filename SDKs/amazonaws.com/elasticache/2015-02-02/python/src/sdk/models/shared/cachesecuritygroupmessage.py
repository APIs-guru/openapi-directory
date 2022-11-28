from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheSecurityGroupMessage:
    r"""CacheSecurityGroupMessage
    Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
    """
    
    cache_security_groups: Optional[List[CacheSecurityGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
