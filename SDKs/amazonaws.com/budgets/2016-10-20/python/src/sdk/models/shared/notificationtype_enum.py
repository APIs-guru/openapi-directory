from dataclasses import dataclass, field
from typing import Enum

class NotificationTypeEnum(str, Enum):
    ACTUAL = "ACTUAL"
    FORECASTED = "FORECASTED"

