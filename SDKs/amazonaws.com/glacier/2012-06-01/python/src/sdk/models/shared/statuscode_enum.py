from dataclasses import dataclass, field
from enum import Enum

class StatusCodeEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

