from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class StartInstancesResult:
    starting_instances: Optional[List[InstanceStateChange]] = field(default=None)
    
