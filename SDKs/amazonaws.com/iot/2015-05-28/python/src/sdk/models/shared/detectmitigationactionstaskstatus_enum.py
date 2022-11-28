from dataclasses import dataclass, field
from enum import Enum

class DetectMitigationActionsTaskStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESSFUL = "SUCCESSFUL"
    FAILED = "FAILED"
    CANCELED = "CANCELED"

