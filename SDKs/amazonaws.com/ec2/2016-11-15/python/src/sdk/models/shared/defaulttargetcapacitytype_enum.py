from dataclasses import dataclass, field
from enum import Enum

class DefaultTargetCapacityTypeEnum(str, Enum):
    SPOT = "spot"
    ON_DEMAND = "on-demand"

