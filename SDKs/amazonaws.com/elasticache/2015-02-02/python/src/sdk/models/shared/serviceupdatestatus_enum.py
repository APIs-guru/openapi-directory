from dataclasses import dataclass, field
from typing import Enum

class ServiceUpdateStatusEnum(str, Enum):
    AVAILABLE = "available"
    CANCELLED = "cancelled"
    EXPIRED = "expired"

