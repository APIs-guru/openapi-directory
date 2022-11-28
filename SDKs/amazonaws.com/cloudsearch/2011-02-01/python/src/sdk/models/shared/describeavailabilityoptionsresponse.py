from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeAvailabilityOptionsResponse:
    r"""DescribeAvailabilityOptionsResponse
    The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. 
    """
    
    availability_options: Optional[AvailabilityOptionsStatus] = field(default=None)
    
