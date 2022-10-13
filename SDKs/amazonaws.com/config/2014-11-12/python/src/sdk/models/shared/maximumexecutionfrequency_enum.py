from dataclasses import dataclass, field
from typing import Enum

class MaximumExecutionFrequencyEnum(str, Enum):
    ONE_HOUR = "One_Hour"
    THREE_HOURS = "Three_Hours"
    SIX_HOURS = "Six_Hours"
    TWELVE_HOURS = "Twelve_Hours"
    TWENTY_FOUR_HOURS = "TwentyFour_Hours"

