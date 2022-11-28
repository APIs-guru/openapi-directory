from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CancelInstanceRefreshAnswer:
    instance_refresh_id: Optional[str] = field(default=None)
    
