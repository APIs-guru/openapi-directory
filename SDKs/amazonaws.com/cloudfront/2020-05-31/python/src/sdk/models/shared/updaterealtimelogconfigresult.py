from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateRealtimeLogConfigResult:
    realtime_log_config: Optional[RealtimeLogConfig] = field(default=None)
    
