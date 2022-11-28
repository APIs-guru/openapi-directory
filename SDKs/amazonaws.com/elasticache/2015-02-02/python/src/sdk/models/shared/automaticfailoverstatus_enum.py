from dataclasses import dataclass, field
from enum import Enum

class AutomaticFailoverStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    ENABLING = "enabling"
    DISABLING = "disabling"

