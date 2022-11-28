from dataclasses import dataclass, field
from enum import Enum

class TimeUnitEnum(str, Enum):
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    ANNUALLY = "ANNUALLY"

