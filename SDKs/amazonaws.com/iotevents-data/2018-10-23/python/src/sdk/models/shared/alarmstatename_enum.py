from dataclasses import dataclass, field
from typing import Enum

class AlarmStateNameEnum(str, Enum):
    DISABLED = "DISABLED"
    NORMAL = "NORMAL"
    ACTIVE = "ACTIVE"
    ACKNOWLEDGED = "ACKNOWLEDGED"
    SNOOZE_DISABLED = "SNOOZE_DISABLED"
    LATCHED = "LATCHED"

