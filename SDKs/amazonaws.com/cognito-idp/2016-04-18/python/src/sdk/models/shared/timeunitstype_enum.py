from dataclasses import dataclass, field
from typing import Enum

class TimeUnitsTypeEnum(str, Enum):
    SECONDS = "seconds"
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"

