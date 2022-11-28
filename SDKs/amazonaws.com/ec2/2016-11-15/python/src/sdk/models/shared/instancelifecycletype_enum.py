from dataclasses import dataclass, field
from enum import Enum

class InstanceLifecycleTypeEnum(str, Enum):
    SPOT = "spot"
    SCHEDULED = "scheduled"

