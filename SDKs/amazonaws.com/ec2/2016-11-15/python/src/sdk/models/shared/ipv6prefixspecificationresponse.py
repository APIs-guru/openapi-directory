from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv6PrefixSpecificationResponse:
    r"""Ipv6PrefixSpecificationResponse
    Information about the IPv6 delegated prefixes assigned to a network interface.
    """
    
    ipv6_prefix: Optional[str] = field(default=None)
    
