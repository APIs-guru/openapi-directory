from dataclasses import dataclass, field
from enum import Enum

class DeletionTaskStatusTypeEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    NOT_STARTED = "NOT_STARTED"

