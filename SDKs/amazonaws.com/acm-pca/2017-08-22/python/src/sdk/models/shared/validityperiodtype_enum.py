from dataclasses import dataclass, field
from typing import Enum

class ValidityPeriodTypeEnum(str, Enum):
    END_DATE = "END_DATE"
    ABSOLUTE = "ABSOLUTE"
    DAYS = "DAYS"
    MONTHS = "MONTHS"
    YEARS = "YEARS"

