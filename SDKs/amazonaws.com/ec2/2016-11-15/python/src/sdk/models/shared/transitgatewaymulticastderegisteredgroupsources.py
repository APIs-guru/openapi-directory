from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TransitGatewayMulticastDeregisteredGroupSources:
    r"""TransitGatewayMulticastDeregisteredGroupSources
    Describes the deregistered transit gateway multicast group sources.
    """
    
    deregistered_network_interface_ids: Optional[List[str]] = field(default=None)
    group_ip_address: Optional[str] = field(default=None)
    transit_gateway_multicast_domain_id: Optional[str] = field(default=None)
    
