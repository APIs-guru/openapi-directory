from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Alarm:
    r"""Alarm
    Describes an alarm.
    """
    
    alarm_arn: Optional[str] = field(default=None)
    alarm_name: Optional[str] = field(default=None)
    
