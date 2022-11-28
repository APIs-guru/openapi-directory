from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ScalingParameters:
    r"""ScalingParameters
    The desired instance type and desired number of replicas of each index partition.
    """
    
    desired_instance_type: Optional[PartitionInstanceTypeEnum] = field(default=None)
    desired_partition_count: Optional[int] = field(default=None)
    desired_replication_count: Optional[int] = field(default=None)
    
