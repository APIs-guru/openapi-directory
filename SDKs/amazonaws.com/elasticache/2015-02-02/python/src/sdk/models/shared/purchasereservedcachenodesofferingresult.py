from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class PurchaseReservedCacheNodesOfferingResult:
    reserved_cache_node: Optional[ReservedCacheNode] = field(default=None)
    
