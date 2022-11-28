from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LoadBalancerAddress:
    r"""LoadBalancerAddress
    Information about a static IP address for a load balancer.
    """
    
    allocation_id: Optional[str] = field(default=None)
    i_pv6_address: Optional[str] = field(default=None)
    ip_address: Optional[str] = field(default=None)
    private_i_pv4_address: Optional[str] = field(default=None)
    
