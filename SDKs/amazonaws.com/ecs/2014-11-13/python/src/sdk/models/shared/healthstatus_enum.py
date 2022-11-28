from dataclasses import dataclass, field
from enum import Enum

class HealthStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNKNOWN = "UNKNOWN"

