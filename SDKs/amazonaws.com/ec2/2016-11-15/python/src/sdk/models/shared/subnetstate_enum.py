from dataclasses import dataclass, field
from enum import Enum

class SubnetStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"

