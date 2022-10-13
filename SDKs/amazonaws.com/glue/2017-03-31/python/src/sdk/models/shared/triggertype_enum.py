from dataclasses import dataclass, field
from typing import Enum

class TriggerTypeEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    CONDITIONAL = "CONDITIONAL"
    ON_DEMAND = "ON_DEMAND"
    EVENT = "EVENT"

