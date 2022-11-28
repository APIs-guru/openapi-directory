from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class MonitorInstancesResult:
    instance_monitorings: Optional[List[InstanceMonitoring]] = field(default=None)
    
