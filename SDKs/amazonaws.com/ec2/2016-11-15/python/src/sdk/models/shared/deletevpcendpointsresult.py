from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeleteVpcEndpointsResult:
    r"""DeleteVpcEndpointsResult
    Contains the output of DeleteVpcEndpoints.
    """
    
    unsuccessful: Optional[List[UnsuccessfulItem]] = field(default=None)
    
