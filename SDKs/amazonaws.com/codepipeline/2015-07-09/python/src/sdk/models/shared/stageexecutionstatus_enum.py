from dataclasses import dataclass, field
from typing import Enum

class StageExecutionStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"
    SUCCEEDED = "Succeeded"

