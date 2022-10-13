from dataclasses import dataclass, field
from typing import Enum

class TimeUnitEnum(str, Enum):
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    ANNUALLY = "ANNUALLY"

