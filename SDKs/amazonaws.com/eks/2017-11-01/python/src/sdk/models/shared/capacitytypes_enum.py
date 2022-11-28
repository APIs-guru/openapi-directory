from dataclasses import dataclass, field
from enum import Enum

class CapacityTypesEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    SPOT = "SPOT"

