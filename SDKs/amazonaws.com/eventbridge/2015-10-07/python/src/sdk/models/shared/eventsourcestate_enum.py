from dataclasses import dataclass, field
from typing import Enum

class EventSourceStateEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"

