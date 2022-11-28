from dataclasses import dataclass, field
from enum import Enum

class FleetTypeEnum(str, Enum):
    ALWAYS_ON = "ALWAYS_ON"
    ON_DEMAND = "ON_DEMAND"

