from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteTrafficMirrorTargetResult:
    traffic_mirror_target_id: Optional[str] = field(default=None)
    
