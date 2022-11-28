from dataclasses import dataclass, field
from enum import Enum

class DelegationStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    UNDER_REVIEW = "UNDER_REVIEW"
    COMPLETE = "COMPLETE"

