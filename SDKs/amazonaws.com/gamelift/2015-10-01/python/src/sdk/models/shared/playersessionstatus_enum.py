from dataclasses import dataclass, field
from typing import Enum

class PlayerSessionStatusEnum(str, Enum):
    RESERVED = "RESERVED"
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    TIMEDOUT = "TIMEDOUT"

