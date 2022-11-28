from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceIpv6Prefix:
    r"""InstanceIpv6Prefix
    Information about an IPv6 prefix.
    """
    
    ipv6_prefix: Optional[str] = field(default=None)
    
