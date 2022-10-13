from dataclasses import dataclass, field
from typing import Enum

class HsmStatusEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    SUSPENDED = "SUSPENDED"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    DEGRADED = "DEGRADED"

