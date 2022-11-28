from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyTrafficMirrorFilterRuleResult:
    traffic_mirror_filter_rule: Optional[TrafficMirrorFilterRule] = field(default=None)
    
