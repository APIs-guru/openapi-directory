from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheParameterGroupsMessage:
    r"""CacheParameterGroupsMessage
    Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
    """
    
    cache_parameter_groups: Optional[List[CacheParameterGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
