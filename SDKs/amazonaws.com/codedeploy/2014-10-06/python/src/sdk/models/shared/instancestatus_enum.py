from dataclasses import dataclass, field
from typing import Enum

class InstanceStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    SKIPPED = "Skipped"
    UNKNOWN = "Unknown"
    READY = "Ready"

