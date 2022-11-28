from dataclasses import dataclass, field
from enum import Enum

class PlacementStrategyTypeEnum(str, Enum):
    RANDOM = "random"
    SPREAD = "spread"
    BINPACK = "binpack"

