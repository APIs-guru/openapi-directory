from dataclasses import dataclass, field
from enum import Enum

class ContributorInsightsStatusEnum(str, Enum):
    ENABLING = "ENABLING"
    ENABLED = "ENABLED"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"
    FAILED = "FAILED"

