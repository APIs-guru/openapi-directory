from dataclasses import dataclass, field
from enum import Enum

class AgentHealthCodeEnum(str, Enum):
    IDLE = "IDLE"
    RUNNING = "RUNNING"
    SHUTDOWN = "SHUTDOWN"
    UNHEALTHY = "UNHEALTHY"
    THROTTLED = "THROTTLED"
    UNKNOWN = "UNKNOWN"

