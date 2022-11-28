from dataclasses import dataclass, field
from enum import Enum

class SpotInstanceStateEnum(str, Enum):
    OPEN = "open"
    ACTIVE = "active"
    CLOSED = "closed"
    CANCELLED = "cancelled"
    FAILED = "failed"

