from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv6PrefixSpecification:
    r"""Ipv6PrefixSpecification
    Describes the IPv6 prefix.
    """
    
    ipv6_prefix: Optional[str] = field(default=None)
    
