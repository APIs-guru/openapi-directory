from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteTrafficMirrorFilterResult:
    traffic_mirror_filter_id: Optional[str] = field(default=None)
    
