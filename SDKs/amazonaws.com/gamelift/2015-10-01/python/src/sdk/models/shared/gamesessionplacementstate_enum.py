from dataclasses import dataclass, field
from typing import Enum

class GameSessionPlacementStateEnum(str, Enum):
    PENDING = "PENDING"
    FULFILLED = "FULFILLED"
    CANCELLED = "CANCELLED"
    TIMED_OUT = "TIMED_OUT"
    FAILED = "FAILED"

