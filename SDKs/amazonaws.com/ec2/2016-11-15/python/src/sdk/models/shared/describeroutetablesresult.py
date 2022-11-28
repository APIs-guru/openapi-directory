from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeRouteTablesResult:
    r"""DescribeRouteTablesResult
    Contains the output of DescribeRouteTables.
    """
    
    next_token: Optional[str] = field(default=None)
    route_tables: Optional[List[RouteTable]] = field(default=None)
    
