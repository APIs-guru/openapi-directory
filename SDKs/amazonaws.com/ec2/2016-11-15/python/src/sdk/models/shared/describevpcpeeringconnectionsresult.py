from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcPeeringConnectionsResult:
    next_token: Optional[str] = field(default=None)
    vpc_peering_connections: Optional[List[VpcPeeringConnection]] = field(default=None)
    
