from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv6PrefixSpecificationRequest:
    r"""Ipv6PrefixSpecificationRequest
    Describes the IPv4 prefix option for a network interface.
    """
    
    ipv6_prefix: Optional[str] = field(default=None)
    
