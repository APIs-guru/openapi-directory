from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcEndpointConnectionsResult:
    next_token: Optional[str] = field(default=None)
    vpc_endpoint_connections: Optional[List[VpcEndpointConnection]] = field(default=None)
    
