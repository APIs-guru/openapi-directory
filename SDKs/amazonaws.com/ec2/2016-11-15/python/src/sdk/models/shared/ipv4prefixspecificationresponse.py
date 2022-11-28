from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv4PrefixSpecificationResponse:
    r"""Ipv4PrefixSpecificationResponse
    Information about the IPv4 delegated prefixes assigned to a network interface.
    """
    
    ipv4_prefix: Optional[str] = field(default=None)
    
