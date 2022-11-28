from dataclasses import dataclass, field
from enum import Enum

class ConversionTaskStateEnum(str, Enum):
    ACTIVE = "active"
    CANCELLING = "cancelling"
    CANCELLED = "cancelled"
    COMPLETED = "completed"

