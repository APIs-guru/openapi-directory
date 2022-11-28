from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTrafficMirrorFilterRuleResult:
    client_token: Optional[str] = field(default=None)
    traffic_mirror_filter_rule: Optional[TrafficMirrorFilterRule] = field(default=None)
    
