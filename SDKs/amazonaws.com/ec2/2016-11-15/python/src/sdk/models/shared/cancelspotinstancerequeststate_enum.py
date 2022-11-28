from dataclasses import dataclass, field
from enum import Enum

class CancelSpotInstanceRequestStateEnum(str, Enum):
    ACTIVE = "active"
    OPEN = "open"
    CLOSED = "closed"
    CANCELLED = "cancelled"
    COMPLETED = "completed"

