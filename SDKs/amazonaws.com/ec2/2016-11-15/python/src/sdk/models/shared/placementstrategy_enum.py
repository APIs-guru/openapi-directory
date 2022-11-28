from dataclasses import dataclass, field
from enum import Enum

class PlacementStrategyEnum(str, Enum):
    CLUSTER = "cluster"
    SPREAD = "spread"
    PARTITION = "partition"

