from dataclasses import dataclass, field
from typing import Enum

class TimeToLiveStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    DISABLING = "DISABLING"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

