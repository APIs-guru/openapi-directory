from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TransitGatewayMulticastRegisteredGroupMembers:
    r"""TransitGatewayMulticastRegisteredGroupMembers
    Describes the registered transit gateway multicast group members.
    """
    
    group_ip_address: Optional[str] = field(default=None)
    registered_network_interface_ids: Optional[List[str]] = field(default=None)
    transit_gateway_multicast_domain_id: Optional[str] = field(default=None)
    
