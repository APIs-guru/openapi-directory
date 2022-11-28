from dataclasses import dataclass, field
from enum import Enum

class JobStatusEnum(str, Enum):
    QUEUED = "Queued"
    IN_PROGRESS = "InProgress"
    COMPLETE = "Complete"
    FAILED = "Failed"

