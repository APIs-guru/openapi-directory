from dataclasses import dataclass, field
from enum import Enum

class EventSourceStateEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"

