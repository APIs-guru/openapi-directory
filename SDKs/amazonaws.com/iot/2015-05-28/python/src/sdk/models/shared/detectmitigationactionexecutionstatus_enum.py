from dataclasses import dataclass, field
from typing import Enum

class DetectMitigationActionExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESSFUL = "SUCCESSFUL"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"

