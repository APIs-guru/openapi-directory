from dataclasses import dataclass, field
from typing import Enum

class FleetTypeEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    SPOT = "SPOT"

