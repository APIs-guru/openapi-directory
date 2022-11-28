from dataclasses import dataclass, field
from enum import Enum

class BatchStateEnum(str, Enum):
    SUBMITTED = "submitted"
    ACTIVE = "active"
    CANCELLED = "cancelled"
    FAILED = "failed"
    CANCELLED_RUNNING = "cancelled_running"
    CANCELLED_TERMINATING = "cancelled_terminating"
    MODIFYING = "modifying"

