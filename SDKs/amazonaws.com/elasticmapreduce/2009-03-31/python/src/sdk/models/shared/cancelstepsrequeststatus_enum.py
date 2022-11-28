from dataclasses import dataclass, field
from enum import Enum

class CancelStepsRequestStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    FAILED = "FAILED"

