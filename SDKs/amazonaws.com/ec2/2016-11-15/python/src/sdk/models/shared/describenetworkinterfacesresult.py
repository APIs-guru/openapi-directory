from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNetworkInterfacesResult:
    r"""DescribeNetworkInterfacesResult
    Contains the output of DescribeNetworkInterfaces.
    """
    
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
