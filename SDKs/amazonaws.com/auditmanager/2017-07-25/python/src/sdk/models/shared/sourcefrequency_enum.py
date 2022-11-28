from dataclasses import dataclass, field
from enum import Enum

class SourceFrequencyEnum(str, Enum):
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"

