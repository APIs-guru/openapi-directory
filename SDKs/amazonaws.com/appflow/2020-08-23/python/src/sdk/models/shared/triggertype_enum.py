from dataclasses import dataclass, field
from typing import Enum

class TriggerTypeEnum(str, Enum):
    SCHEDULED = "Scheduled"
    EVENT = "Event"
    ON_DEMAND = "OnDemand"

