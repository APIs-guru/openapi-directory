from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeleteVpcEndpointServiceConfigurationsResult:
    unsuccessful: Optional[List[UnsuccessfulItem]] = field(default=None)
    
