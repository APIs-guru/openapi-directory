from dataclasses import dataclass, field
from typing import Enum

class PlacementStrategyTypeEnum(str, Enum):
    RANDOM = "random"
    SPREAD = "spread"
    BINPACK = "binpack"

