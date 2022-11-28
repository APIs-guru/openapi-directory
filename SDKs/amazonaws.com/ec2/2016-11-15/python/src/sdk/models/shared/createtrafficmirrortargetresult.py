from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTrafficMirrorTargetResult:
    client_token: Optional[str] = field(default=None)
    traffic_mirror_target: Optional[TrafficMirrorTarget] = field(default=None)
    
