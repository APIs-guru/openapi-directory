from dataclasses import dataclass, field
from enum import Enum

class TimeToLiveStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    DISABLING = "DISABLING"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

