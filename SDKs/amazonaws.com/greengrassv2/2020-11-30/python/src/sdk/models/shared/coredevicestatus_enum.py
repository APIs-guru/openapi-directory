from dataclasses import dataclass, field
from typing import Enum

class CoreDeviceStatusEnum(str, Enum):
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"

