from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeScheduledInstanceAvailabilityResult:
    r"""DescribeScheduledInstanceAvailabilityResult
    Contains the output of DescribeScheduledInstanceAvailability.
    """
    
    next_token: Optional[str] = field(default=None)
    scheduled_instance_availability_set: Optional[List[ScheduledInstanceAvailability]] = field(default=None)
    
