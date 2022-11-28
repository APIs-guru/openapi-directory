from dataclasses import dataclass, field
from enum import Enum

class ReportFrequencyEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    ALL = "ALL"

