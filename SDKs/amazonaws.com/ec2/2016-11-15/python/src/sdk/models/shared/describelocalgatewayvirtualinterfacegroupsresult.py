from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLocalGatewayVirtualInterfaceGroupsResult:
    local_gateway_virtual_interface_groups: Optional[List[LocalGatewayVirtualInterfaceGroup]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
