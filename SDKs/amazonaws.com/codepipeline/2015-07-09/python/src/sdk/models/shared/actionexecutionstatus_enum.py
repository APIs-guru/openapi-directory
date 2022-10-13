from dataclasses import dataclass, field
from typing import Enum

class ActionExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    ABANDONED = "Abandoned"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

