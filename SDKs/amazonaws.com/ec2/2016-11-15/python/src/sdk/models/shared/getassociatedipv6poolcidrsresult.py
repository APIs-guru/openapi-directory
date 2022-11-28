from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetAssociatedIpv6PoolCidrsResult:
    ipv6_cidr_associations: Optional[List[Ipv6CidrAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
