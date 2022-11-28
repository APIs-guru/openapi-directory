from dataclasses import dataclass, field
from enum import Enum

class ScheduleFrequencyTypeEnum(str, Enum):
    BYMINUTE = "BYMINUTE"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    ONCE = "ONCE"

