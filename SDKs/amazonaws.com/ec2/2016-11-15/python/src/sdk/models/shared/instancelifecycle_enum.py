from dataclasses import dataclass, field
from enum import Enum

class InstanceLifecycleEnum(str, Enum):
    SPOT = "spot"
    ON_DEMAND = "on-demand"

