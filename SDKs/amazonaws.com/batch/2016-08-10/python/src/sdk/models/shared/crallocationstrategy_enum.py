from dataclasses import dataclass, field
from typing import Enum

class CrAllocationStrategyEnum(str, Enum):
    BEST_FIT = "BEST_FIT"
    BEST_FIT_PROGRESSIVE = "BEST_FIT_PROGRESSIVE"
    SPOT_CAPACITY_OPTIMIZED = "SPOT_CAPACITY_OPTIMIZED"

