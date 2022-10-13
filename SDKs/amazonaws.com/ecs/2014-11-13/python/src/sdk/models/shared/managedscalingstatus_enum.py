from dataclasses import dataclass, field
from typing import Enum

class ManagedScalingStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

