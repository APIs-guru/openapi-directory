from dataclasses import dataclass, field
from enum import Enum

class SseStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    ENABLED = "ENABLED"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"
    UPDATING = "UPDATING"

