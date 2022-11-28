from dataclasses import dataclass, field
from enum import Enum

class TimeUnitEnum(str, Enum):
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"

