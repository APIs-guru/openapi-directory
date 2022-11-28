from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RequestSpotInstancesResult:
    r"""RequestSpotInstancesResult
    Contains the output of RequestSpotInstances.
    """
    
    spot_instance_requests: Optional[List[SpotInstanceRequest]] = field(default=None)
    
