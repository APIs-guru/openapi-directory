from dataclasses import dataclass, field
from enum import Enum

class CoreDeviceStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

