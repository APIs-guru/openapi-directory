from dataclasses import dataclass, field
from enum import Enum

class VpcStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"

