from dataclasses import dataclass, field
from enum import Enum

class DestinationStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    ACTIVE = "ACTIVE"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"
    ENABLE_FAILED = "ENABLE_FAILED"

