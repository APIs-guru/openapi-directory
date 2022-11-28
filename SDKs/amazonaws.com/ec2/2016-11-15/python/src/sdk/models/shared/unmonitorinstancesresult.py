from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UnmonitorInstancesResult:
    instance_monitorings: Optional[List[InstanceMonitoring]] = field(default=None)
    
