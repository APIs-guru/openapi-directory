from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AcceptVpcEndpointConnectionsResult:
    unsuccessful: Optional[List[UnsuccessfulItem]] = field(default=None)
    
