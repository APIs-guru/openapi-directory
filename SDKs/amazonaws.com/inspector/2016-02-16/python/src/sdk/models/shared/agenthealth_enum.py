from dataclasses import dataclass, field
from enum import Enum

class AgentHealthEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNKNOWN = "UNKNOWN"

