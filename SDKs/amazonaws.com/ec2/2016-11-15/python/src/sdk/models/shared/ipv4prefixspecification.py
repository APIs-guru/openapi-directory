from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv4PrefixSpecification:
    r"""Ipv4PrefixSpecification
    Describes an IPv4 prefix.
    """
    
    ipv4_prefix: Optional[str] = field(default=None)
    
