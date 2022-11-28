from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PublicIpv4Pool:
    r"""PublicIpv4Pool
    Describes an IPv4 address pool.
    """
    
    description: Optional[str] = field(default=None)
    network_border_group: Optional[str] = field(default=None)
    pool_address_ranges: Optional[List[PublicIpv4PoolRange]] = field(default=None)
    pool_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    total_address_count: Optional[int] = field(default=None)
    total_available_address_count: Optional[int] = field(default=None)
    
