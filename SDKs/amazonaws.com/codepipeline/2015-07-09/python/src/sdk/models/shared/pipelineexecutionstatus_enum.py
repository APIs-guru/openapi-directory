from dataclasses import dataclass, field
from enum import Enum

class PipelineExecutionStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    IN_PROGRESS = "InProgress"
    STOPPED = "Stopped"
    STOPPING = "Stopping"
    SUCCEEDED = "Succeeded"
    SUPERSEDED = "Superseded"
    FAILED = "Failed"

