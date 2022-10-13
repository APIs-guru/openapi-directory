from dataclasses import dataclass, field
from typing import Enum

class PriorityTypeEnum(str, Enum):
    LATENCY = "LATENCY"
    COST = "COST"
    DESTINATION = "DESTINATION"
    LOCATION = "LOCATION"

