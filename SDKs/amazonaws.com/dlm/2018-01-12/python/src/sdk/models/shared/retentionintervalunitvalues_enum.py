from dataclasses import dataclass, field
from typing import Enum

class RetentionIntervalUnitValuesEnum(str, Enum):
    DAYS = "DAYS"
    WEEKS = "WEEKS"
    MONTHS = "MONTHS"
    YEARS = "YEARS"

