from dataclasses import dataclass, field
from enum import Enum

class AgentStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    RUNNING = "RUNNING"
    UNKNOWN = "UNKNOWN"
    BLACKLISTED = "BLACKLISTED"
    SHUTDOWN = "SHUTDOWN"

