from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceIpv4Prefix:
    r"""InstanceIpv4Prefix
    Information about an IPv4 prefix.
    """
    
    ipv4_prefix: Optional[str] = field(default=None)
    
