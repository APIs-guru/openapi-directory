from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceIpv6Address:
    r"""InstanceIpv6Address
    Describes an IPv6 address.
    """
    
    ipv6_address: Optional[str] = field(default=None)
    
