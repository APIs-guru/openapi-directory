from dataclasses import dataclass, field
from typing import Enum

class SourceFrequencyEnum(str, Enum):
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"

