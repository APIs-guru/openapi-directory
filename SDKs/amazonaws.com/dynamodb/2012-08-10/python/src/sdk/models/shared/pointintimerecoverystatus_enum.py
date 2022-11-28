from dataclasses import dataclass, field
from enum import Enum

class PointInTimeRecoveryStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

