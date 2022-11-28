from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteLocalGatewayRouteResult:
    route: Optional[LocalGatewayRoute] = field(default=None)
    
