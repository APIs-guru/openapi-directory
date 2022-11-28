from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Ipv6Pool:
    r"""Ipv6Pool
    Describes an IPv6 address pool.
    """
    
    description: Optional[str] = field(default=None)
    pool_cidr_blocks: Optional[List[PoolCidrBlock]] = field(default=None)
    pool_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
