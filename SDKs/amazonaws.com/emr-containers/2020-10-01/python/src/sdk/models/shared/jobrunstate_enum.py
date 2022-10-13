from dataclasses import dataclass, field
from typing import Enum

class JobRunStateEnum(str, Enum):
    PENDING = "PENDING"
    SUBMITTED = "SUBMITTED"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    CANCEL_PENDING = "CANCEL_PENDING"
    COMPLETED = "COMPLETED"

