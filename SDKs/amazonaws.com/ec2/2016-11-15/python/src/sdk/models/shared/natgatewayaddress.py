from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NatGatewayAddress:
    r"""NatGatewayAddress
    Describes the IP addresses and network interface associated with a NAT gateway.
    """
    
    allocation_id: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    private_ip: Optional[str] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    
