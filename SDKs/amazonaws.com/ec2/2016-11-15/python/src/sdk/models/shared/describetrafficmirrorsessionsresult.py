from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTrafficMirrorSessionsResult:
    next_token: Optional[str] = field(default=None)
    traffic_mirror_sessions: Optional[List[TrafficMirrorSession]] = field(default=None)
    
