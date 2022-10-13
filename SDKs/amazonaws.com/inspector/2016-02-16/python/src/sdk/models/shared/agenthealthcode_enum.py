from dataclasses import dataclass, field
from typing import Enum

class AgentHealthCodeEnum(str, Enum):
    IDLE = "IDLE"
    RUNNING = "RUNNING"
    SHUTDOWN = "SHUTDOWN"
    UNHEALTHY = "UNHEALTHY"
    THROTTLED = "THROTTLED"
    UNKNOWN = "UNKNOWN"

