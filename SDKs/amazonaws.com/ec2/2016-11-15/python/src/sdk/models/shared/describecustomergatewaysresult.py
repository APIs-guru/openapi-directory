from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeCustomerGatewaysResult:
    r"""DescribeCustomerGatewaysResult
    Contains the output of DescribeCustomerGateways.
    """
    
    customer_gateways: Optional[List[CustomerGateway]] = field(default=None)
    
