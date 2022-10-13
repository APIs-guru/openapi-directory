from dataclasses import dataclass, field
from typing import Enum

class GameSessionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ACTIVATING = "ACTIVATING"
    TERMINATED = "TERMINATED"
    TERMINATING = "TERMINATING"
    ERROR = "ERROR"

