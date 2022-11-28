from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLocalGatewayVirtualInterfacesResult:
    local_gateway_virtual_interfaces: Optional[List[LocalGatewayVirtualInterface]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
