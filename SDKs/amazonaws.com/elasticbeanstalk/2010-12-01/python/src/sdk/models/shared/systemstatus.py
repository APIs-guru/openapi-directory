from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SystemStatus:
    r"""SystemStatus
    CPU utilization and load average metrics for an Amazon EC2 instance.
    """
    
    cpu_utilization: Optional[CPUUtilization] = field(default=None)
    load_average: Optional[List[float]] = field(default=None)
    
