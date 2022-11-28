from dataclasses import dataclass, field
from enum import Enum

class UsageClassTypeEnum(str, Enum):
    SPOT = "spot"
    ON_DEMAND = "on-demand"

