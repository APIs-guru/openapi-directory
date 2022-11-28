from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInternetGatewaysResult:
    internet_gateways: Optional[List[InternetGateway]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
