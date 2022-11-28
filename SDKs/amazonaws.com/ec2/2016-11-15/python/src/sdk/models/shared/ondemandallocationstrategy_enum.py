from dataclasses import dataclass, field
from enum import Enum

class OnDemandAllocationStrategyEnum(str, Enum):
    LOWEST_PRICE = "lowestPrice"
    PRIORITIZED = "prioritized"

