from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SearchTransitGatewayRoutesResult:
    additional_routes_available: Optional[bool] = field(default=None)
    routes: Optional[List[TransitGatewayRoute]] = field(default=None)
    
