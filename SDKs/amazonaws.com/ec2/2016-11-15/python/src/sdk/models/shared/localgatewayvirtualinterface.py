from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocalGatewayVirtualInterface:
    r"""LocalGatewayVirtualInterface
    Describes a local gateway virtual interface.
    """
    
    local_address: Optional[str] = field(default=None)
    local_bgp_asn: Optional[int] = field(default=None)
    local_gateway_id: Optional[str] = field(default=None)
    local_gateway_virtual_interface_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    peer_address: Optional[str] = field(default=None)
    peer_bgp_asn: Optional[int] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vlan: Optional[int] = field(default=None)
    
