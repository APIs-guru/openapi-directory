from dataclasses import dataclass, field
from enum import Enum

class ImageStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"
    INVALID = "invalid"
    DEREGISTERED = "deregistered"
    TRANSIENT = "transient"
    FAILED = "failed"
    ERROR = "error"

