from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv4PrefixSpecificationRequest:
    r"""Ipv4PrefixSpecificationRequest
    Describes the IPv4 prefix option for a network interface.
    """
    
    ipv4_prefix: Optional[str] = field(default=None)
    
