from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv6Range:
    r"""Ipv6Range
    [EC2-VPC only] Describes an IPv6 range.
    """
    
    cidr_ipv6: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
