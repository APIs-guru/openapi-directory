from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeregisterEndPointsOutput:
    r"""DeregisterEndPointsOutput
    Contains the output of DeregisterInstancesFromLoadBalancer.
    """
    
    instances: Optional[List[Instance]] = field(default=None)
    
