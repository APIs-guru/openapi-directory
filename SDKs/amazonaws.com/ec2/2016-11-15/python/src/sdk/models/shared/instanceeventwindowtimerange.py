from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceEventWindowTimeRange:
    r"""InstanceEventWindowTimeRange
    The start day and time and the end day and time of the time range, in UTC.
    """
    
    end_hour: Optional[int] = field(default=None)
    end_week_day: Optional[WeekDayEnum] = field(default=None)
    start_hour: Optional[int] = field(default=None)
    start_week_day: Optional[WeekDayEnum] = field(default=None)
    
