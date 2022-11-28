from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    ENABLED = "ENABLED"
    ENABLING = "ENABLING"
    DISABLED = "DISABLED"
    DISABLING = "DISABLING"

