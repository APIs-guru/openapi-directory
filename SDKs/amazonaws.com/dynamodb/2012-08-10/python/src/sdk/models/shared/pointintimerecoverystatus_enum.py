from dataclasses import dataclass, field
from typing import Enum

class PointInTimeRecoveryStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

