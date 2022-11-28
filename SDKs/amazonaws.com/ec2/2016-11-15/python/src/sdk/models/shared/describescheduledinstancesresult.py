from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeScheduledInstancesResult:
    r"""DescribeScheduledInstancesResult
    Contains the output of DescribeScheduledInstances.
    """
    
    next_token: Optional[str] = field(default=None)
    scheduled_instance_set: Optional[List[ScheduledInstance]] = field(default=None)
    
