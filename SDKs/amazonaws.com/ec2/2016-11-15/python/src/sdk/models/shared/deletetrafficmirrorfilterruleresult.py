from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteTrafficMirrorFilterRuleResult:
    traffic_mirror_filter_rule_id: Optional[str] = field(default=None)
    
