from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTrafficMirrorTargetsResult:
    next_token: Optional[str] = field(default=None)
    traffic_mirror_targets: Optional[List[TrafficMirrorTarget]] = field(default=None)
    
