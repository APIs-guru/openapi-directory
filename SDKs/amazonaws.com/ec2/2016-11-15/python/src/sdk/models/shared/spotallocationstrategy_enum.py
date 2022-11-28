from dataclasses import dataclass, field
from enum import Enum

class SpotAllocationStrategyEnum(str, Enum):
    LOWEST_PRICE = "lowest-price"
    DIVERSIFIED = "diversified"
    CAPACITY_OPTIMIZED = "capacity-optimized"
    CAPACITY_OPTIMIZED_PRIORITIZED = "capacity-optimized-prioritized"

