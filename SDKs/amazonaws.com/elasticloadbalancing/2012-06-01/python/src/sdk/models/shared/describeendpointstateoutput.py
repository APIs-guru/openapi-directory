from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeEndPointStateOutput:
    r"""DescribeEndPointStateOutput
    Contains the output for DescribeInstanceHealth.
    """
    
    instance_states: Optional[List[InstanceState]] = field(default=None)
    
