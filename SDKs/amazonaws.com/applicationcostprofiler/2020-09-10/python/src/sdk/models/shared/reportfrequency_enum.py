from dataclasses import dataclass, field
from typing import Enum

class ReportFrequencyEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    ALL = "ALL"

