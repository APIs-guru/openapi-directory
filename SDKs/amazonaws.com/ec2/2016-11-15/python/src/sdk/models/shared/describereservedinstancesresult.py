from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeReservedInstancesResult:
    r"""DescribeReservedInstancesResult
    Contains the output for DescribeReservedInstances.
    """
    
    reserved_instances: Optional[List[ReservedInstances]] = field(default=None)
    
