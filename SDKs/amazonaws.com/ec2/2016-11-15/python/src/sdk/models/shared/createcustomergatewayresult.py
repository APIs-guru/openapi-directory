from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateCustomerGatewayResult:
    r"""CreateCustomerGatewayResult
    Contains the output of CreateCustomerGateway.
    """
    
    customer_gateway: Optional[CustomerGateway] = field(default=None)
    
