from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyTrafficMirrorSessionResult:
    traffic_mirror_session: Optional[TrafficMirrorSession] = field(default=None)
    
