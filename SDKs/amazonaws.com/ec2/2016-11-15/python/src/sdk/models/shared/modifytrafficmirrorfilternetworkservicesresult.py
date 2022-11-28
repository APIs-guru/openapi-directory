from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyTrafficMirrorFilterNetworkServicesResult:
    traffic_mirror_filter: Optional[TrafficMirrorFilter] = field(default=None)
    
