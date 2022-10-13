from dataclasses import dataclass, field
from typing import Enum

class TargetStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    UNREACHABLE = "UNREACHABLE"
    INACTIVE = "INACTIVE"
    DEACTIVATED = "DEACTIVATED"

