from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTrafficMirrorSessionResult:
    client_token: Optional[str] = field(default=None)
    traffic_mirror_session: Optional[TrafficMirrorSession] = field(default=None)
    
