from dataclasses import dataclass, field
from typing import Enum

class FleetTypeEnum(str, Enum):
    ALWAYS_ON = "ALWAYS_ON"
    ON_DEMAND = "ON_DEMAND"

