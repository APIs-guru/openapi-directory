from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLocalGatewaysResult:
    local_gateways: Optional[List[LocalGateway]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
