from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TerminateInstancesResult:
    terminating_instances: Optional[List[InstanceStateChange]] = field(default=None)
    
