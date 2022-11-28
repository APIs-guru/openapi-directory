from dataclasses import dataclass, field
from enum import Enum

class TriggerTypeEnum(str, Enum):
    SCHEDULED = "Scheduled"
    EVENT = "Event"
    ON_DEMAND = "OnDemand"

