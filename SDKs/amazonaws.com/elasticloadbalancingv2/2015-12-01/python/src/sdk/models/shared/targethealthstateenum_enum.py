from dataclasses import dataclass, field
from enum import Enum

class TargetHealthStateEnumEnum(str, Enum):
    INITIAL = "initial"
    HEALTHY = "healthy"
    UNHEALTHY = "unhealthy"
    UNUSED = "unused"
    DRAINING = "draining"
    UNAVAILABLE = "unavailable"

