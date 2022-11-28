from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

