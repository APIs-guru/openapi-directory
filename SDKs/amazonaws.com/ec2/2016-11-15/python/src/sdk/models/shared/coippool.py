from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CoipPool:
    r"""CoipPool
    Describes a customer-owned address pool.
    """
    
    local_gateway_route_table_id: Optional[str] = field(default=None)
    pool_arn: Optional[str] = field(default=None)
    pool_cidrs: Optional[List[str]] = field(default=None)
    pool_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
