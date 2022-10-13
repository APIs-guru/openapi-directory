from dataclasses import dataclass, field
from typing import Enum

class SessionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    EXPIRED = "EXPIRED"

