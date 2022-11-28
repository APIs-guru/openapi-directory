from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SearchLocalGatewayRoutesResult:
    next_token: Optional[str] = field(default=None)
    routes: Optional[List[LocalGatewayRoute]] = field(default=None)
    
