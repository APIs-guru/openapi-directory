from dataclasses import dataclass, field
from typing import Enum

class TimeUnitEnum(str, Enum):
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"

