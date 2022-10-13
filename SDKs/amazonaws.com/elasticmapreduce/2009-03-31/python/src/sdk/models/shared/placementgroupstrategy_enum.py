from dataclasses import dataclass, field
from typing import Enum

class PlacementGroupStrategyEnum(str, Enum):
    SPREAD = "SPREAD"
    PARTITION = "PARTITION"
    CLUSTER = "CLUSTER"
    NONE = "NONE"

