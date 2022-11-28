from dataclasses import dataclass, field
from enum import Enum

class ListingStateEnum(str, Enum):
    AVAILABLE = "available"
    SOLD = "sold"
    CANCELLED = "cancelled"
    PENDING = "pending"

