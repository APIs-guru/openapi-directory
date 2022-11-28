from dataclasses import dataclass, field
from enum import Enum

class ListingStatusEnum(str, Enum):
    ACTIVE = "active"
    PENDING = "pending"
    CANCELLED = "cancelled"
    CLOSED = "closed"

