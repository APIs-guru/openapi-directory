from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NetworkInterfaceIpv6Address:
    r"""NetworkInterfaceIpv6Address
    Describes an IPv6 address associated with a network interface.
    """
    
    ipv6_address: Optional[str] = field(default=None)
    
