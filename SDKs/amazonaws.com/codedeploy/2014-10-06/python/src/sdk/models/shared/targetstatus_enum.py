from dataclasses import dataclass, field
from enum import Enum

class TargetStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    SKIPPED = "Skipped"
    UNKNOWN = "Unknown"
    READY = "Ready"

