from dataclasses import dataclass, field
from enum import Enum

class PlacementGroupStrategyEnum(str, Enum):
    CLUSTER = "cluster"
    PARTITION = "partition"
    SPREAD = "spread"

