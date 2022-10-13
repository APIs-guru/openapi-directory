from dataclasses import dataclass, field
from typing import Enum

class StepStateEnum(str, Enum):
    PENDING = "PENDING"
    CANCEL_PENDING = "CANCEL_PENDING"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"
    INTERRUPTED = "INTERRUPTED"

