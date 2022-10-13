from dataclasses import dataclass, field
from typing import Enum

class LagStateEnum(str, Enum):
    REQUESTED = "requested"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    DELETING = "deleting"
    DELETED = "deleted"
    UNKNOWN = "unknown"

