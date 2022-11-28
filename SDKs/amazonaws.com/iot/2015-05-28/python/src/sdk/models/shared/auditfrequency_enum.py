from dataclasses import dataclass, field
from enum import Enum

class AuditFrequencyEnum(str, Enum):
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    BIWEEKLY = "BIWEEKLY"
    MONTHLY = "MONTHLY"

