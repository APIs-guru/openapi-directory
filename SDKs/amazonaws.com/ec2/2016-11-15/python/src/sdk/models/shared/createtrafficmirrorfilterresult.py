from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTrafficMirrorFilterResult:
    client_token: Optional[str] = field(default=None)
    traffic_mirror_filter: Optional[TrafficMirrorFilter] = field(default=None)
    
