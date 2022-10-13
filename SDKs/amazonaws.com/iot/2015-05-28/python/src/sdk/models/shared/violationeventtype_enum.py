from dataclasses import dataclass, field
from typing import Enum

class ViolationEventTypeEnum(str, Enum):
    IN_ALARM = "in-alarm"
    ALARM_CLEARED = "alarm-cleared"
    ALARM_INVALIDATED = "alarm-invalidated"

