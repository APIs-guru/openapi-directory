from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class StopInstancesResult:
    stopping_instances: Optional[List[InstanceStateChange]] = field(default=None)
    
