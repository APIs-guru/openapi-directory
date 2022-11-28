from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    CREATED = "Created"
    QUEUED = "Queued"
    DISPATCHED = "Dispatched"
    IN_PROGRESS = "InProgress"
    TIMED_OUT = "TimedOut"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

