from dataclasses import dataclass, field
from enum import Enum

class HsmStatusEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    SUSPENDED = "SUSPENDED"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    DEGRADED = "DEGRADED"

