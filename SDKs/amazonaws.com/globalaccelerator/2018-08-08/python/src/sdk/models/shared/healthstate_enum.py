from dataclasses import dataclass, field
from enum import Enum

class HealthStateEnum(str, Enum):
    INITIAL = "INITIAL"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

