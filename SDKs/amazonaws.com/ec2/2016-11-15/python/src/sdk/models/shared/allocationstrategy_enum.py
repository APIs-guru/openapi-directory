from dataclasses import dataclass, field
from enum import Enum

class AllocationStrategyEnum(str, Enum):
    LOWEST_PRICE = "lowestPrice"
    DIVERSIFIED = "diversified"
    CAPACITY_OPTIMIZED = "capacityOptimized"
    CAPACITY_OPTIMIZED_PRIORITIZED = "capacityOptimizedPrioritized"

