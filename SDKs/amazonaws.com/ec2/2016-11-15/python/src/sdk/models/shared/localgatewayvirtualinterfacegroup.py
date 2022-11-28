from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocalGatewayVirtualInterfaceGroup:
    r"""LocalGatewayVirtualInterfaceGroup
    Describes a local gateway virtual interface group.
    """
    
    local_gateway_id: Optional[str] = field(default=None)
    local_gateway_virtual_interface_group_id: Optional[str] = field(default=None)
    local_gateway_virtual_interface_ids: Optional[List[str]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
