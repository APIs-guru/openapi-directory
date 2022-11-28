from dataclasses import dataclass, field
from enum import Enum

class ManagedScalingStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

