from dataclasses import dataclass, field
from typing import Enum

class AgentHealthEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNKNOWN = "UNKNOWN"

