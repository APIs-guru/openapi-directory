from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RealtimeLogConfigs:
    r"""RealtimeLogConfigs
    A list of real-time log configurations.
    """
    
    is_truncated: bool = field()
    marker: str = field()
    max_items: int = field()
    items: Optional[List[RealtimeLogConfig]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
