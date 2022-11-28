from dataclasses import dataclass, field
from enum import Enum

class CapacityReservationStateEnum(str, Enum):
    ACTIVE = "active"
    EXPIRED = "expired"
    CANCELLED = "cancelled"
    PENDING = "pending"
    FAILED = "failed"

