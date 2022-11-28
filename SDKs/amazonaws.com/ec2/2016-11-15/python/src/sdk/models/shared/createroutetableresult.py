from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateRouteTableResult:
    route_table: Optional[RouteTable] = field(default=None)
    
