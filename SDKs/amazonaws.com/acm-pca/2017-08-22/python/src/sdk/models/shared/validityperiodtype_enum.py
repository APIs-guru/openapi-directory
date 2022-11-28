from dataclasses import dataclass, field
from enum import Enum

class ValidityPeriodTypeEnum(str, Enum):
    END_DATE = "END_DATE"
    ABSOLUTE = "ABSOLUTE"
    DAYS = "DAYS"
    MONTHS = "MONTHS"
    YEARS = "YEARS"

