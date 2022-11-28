from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateRealtimeLogConfigResult:
    realtime_log_config: Optional[RealtimeLogConfig] = field(default=None)
    
