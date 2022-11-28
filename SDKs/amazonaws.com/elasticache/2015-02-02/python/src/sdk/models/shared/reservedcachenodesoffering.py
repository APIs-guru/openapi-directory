from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReservedCacheNodesOffering:
    r"""ReservedCacheNodesOffering
    Describes all of the attributes of a reserved cache node offering.
    """
    
    cache_node_type: Optional[str] = field(default=None)
    duration: Optional[int] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    offering_type: Optional[str] = field(default=None)
    product_description: Optional[str] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reserved_cache_nodes_offering_id: Optional[str] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
