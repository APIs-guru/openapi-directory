from dataclasses import dataclass, field
from typing import Enum

class DestinationStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    ACTIVE = "ACTIVE"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"
    ENABLE_FAILED = "ENABLE_FAILED"

