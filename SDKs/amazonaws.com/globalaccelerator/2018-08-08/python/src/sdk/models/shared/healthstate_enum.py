from dataclasses import dataclass, field
from typing import Enum

class HealthStateEnum(str, Enum):
    INITIAL = "INITIAL"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

