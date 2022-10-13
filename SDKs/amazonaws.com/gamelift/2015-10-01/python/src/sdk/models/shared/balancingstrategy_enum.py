from dataclasses import dataclass, field
from typing import Enum

class BalancingStrategyEnum(str, Enum):
    SPOT_ONLY = "SPOT_ONLY"
    SPOT_PREFERRED = "SPOT_PREFERRED"
    ON_DEMAND_ONLY = "ON_DEMAND_ONLY"

