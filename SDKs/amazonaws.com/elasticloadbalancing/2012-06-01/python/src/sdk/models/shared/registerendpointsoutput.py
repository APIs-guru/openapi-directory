from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RegisterEndPointsOutput:
    r"""RegisterEndPointsOutput
    Contains the output of RegisterInstancesWithLoadBalancer.
    """
    
    instances: Optional[List[Instance]] = field(default=None)
    
