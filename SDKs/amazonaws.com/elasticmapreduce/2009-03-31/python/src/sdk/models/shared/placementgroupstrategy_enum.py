from dataclasses import dataclass, field
from enum import Enum

class PlacementGroupStrategyEnum(str, Enum):
    SPREAD = "SPREAD"
    PARTITION = "PARTITION"
    CLUSTER = "CLUSTER"
    NONE = "NONE"

