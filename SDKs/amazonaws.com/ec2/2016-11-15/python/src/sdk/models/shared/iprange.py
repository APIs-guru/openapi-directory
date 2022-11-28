from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IPRange:
    r"""IPRange
    Describes an IPv4 range.
    """
    
    cidr_ip: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
