from dataclasses import dataclass, field
from enum import Enum

class StepExecutionStateEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    CONTINUE = "CONTINUE"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"
    INTERRUPTED = "INTERRUPTED"

