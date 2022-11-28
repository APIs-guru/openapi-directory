from dataclasses import dataclass, field
from enum import Enum

class FpgaImageStateCodeEnum(str, Enum):
    PENDING = "pending"
    FAILED = "failed"
    AVAILABLE = "available"
    UNAVAILABLE = "unavailable"

