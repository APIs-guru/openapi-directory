from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeCarrierGatewaysResult:
    carrier_gateways: Optional[List[CarrierGateway]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
