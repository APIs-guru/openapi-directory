from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListRealtimeLogConfigsResult:
    realtime_log_configs: Optional[RealtimeLogConfigs] = field(default=None)
    
