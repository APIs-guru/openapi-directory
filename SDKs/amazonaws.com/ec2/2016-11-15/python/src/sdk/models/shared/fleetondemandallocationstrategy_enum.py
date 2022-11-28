from dataclasses import dataclass, field
from enum import Enum

class FleetOnDemandAllocationStrategyEnum(str, Enum):
    LOWEST_PRICE = "lowest-price"
    PRIORITIZED = "prioritized"

