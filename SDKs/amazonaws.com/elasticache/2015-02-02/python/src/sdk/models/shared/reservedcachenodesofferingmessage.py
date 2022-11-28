from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReservedCacheNodesOfferingMessage:
    r"""ReservedCacheNodesOfferingMessage
    Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
    """
    
    marker: Optional[str] = field(default=None)
    reserved_cache_nodes_offerings: Optional[List[ReservedCacheNodesOffering]] = field(default=None)
    
