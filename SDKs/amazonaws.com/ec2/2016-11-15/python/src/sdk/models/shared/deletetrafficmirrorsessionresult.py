from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteTrafficMirrorSessionResult:
    traffic_mirror_session_id: Optional[str] = field(default=None)
    
