from dataclasses import dataclass, field
from enum import Enum

class SessionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    EXPIRED = "EXPIRED"

