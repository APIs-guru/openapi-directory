from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReservedCacheNodeMessage:
    r"""ReservedCacheNodeMessage
    Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
    """
    
    marker: Optional[str] = field(default=None)
    reserved_cache_nodes: Optional[List[ReservedCacheNode]] = field(default=None)
    
