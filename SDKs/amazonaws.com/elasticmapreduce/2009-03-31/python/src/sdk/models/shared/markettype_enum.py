from dataclasses import dataclass, field
from enum import Enum

class MarketTypeEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    SPOT = "SPOT"

