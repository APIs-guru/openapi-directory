from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetCoipPoolUsageResult:
    coip_address_usages: Optional[List[CoipAddressUsage]] = field(default=None)
    coip_pool_id: Optional[str] = field(default=None)
    local_gateway_route_table_id: Optional[str] = field(default=None)
    
