from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateLocalGatewayRouteResult:
    route: Optional[LocalGatewayRoute] = field(default=None)
    
