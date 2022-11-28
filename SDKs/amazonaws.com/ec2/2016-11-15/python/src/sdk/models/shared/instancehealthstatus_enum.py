from dataclasses import dataclass, field
from enum import Enum

class InstanceHealthStatusEnum(str, Enum):
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"

