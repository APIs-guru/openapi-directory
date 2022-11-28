from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PublicIpv4PoolRange:
    r"""PublicIpv4PoolRange
    Describes an address range of an IPv4 address pool.
    """
    
    address_count: Optional[int] = field(default=None)
    available_address_count: Optional[int] = field(default=None)
    first_address: Optional[str] = field(default=None)
    last_address: Optional[str] = field(default=None)
    
