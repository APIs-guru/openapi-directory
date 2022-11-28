from dataclasses import dataclass, field
from enum import Enum

class PlayerSessionStatusEnum(str, Enum):
    RESERVED = "RESERVED"
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    TIMEDOUT = "TIMEDOUT"

