from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ReservedCacheNode:
    r"""ReservedCacheNode
    Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
    """
    
    cache_node_count: Optional[int] = field(default=None)
    cache_node_type: Optional[str] = field(default=None)
    duration: Optional[int] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    offering_type: Optional[str] = field(default=None)
    product_description: Optional[str] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reservation_arn: Optional[str] = field(default=None)
    reserved_cache_node_id: Optional[str] = field(default=None)
    reserved_cache_nodes_offering_id: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    state: Optional[str] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
