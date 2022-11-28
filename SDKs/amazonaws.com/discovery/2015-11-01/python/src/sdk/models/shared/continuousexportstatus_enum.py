from dataclasses import dataclass, field
from enum import Enum

class ContinuousExportStatusEnum(str, Enum):
    START_IN_PROGRESS = "START_IN_PROGRESS"
    START_FAILED = "START_FAILED"
    ACTIVE = "ACTIVE"
    ERROR = "ERROR"
    STOP_IN_PROGRESS = "STOP_IN_PROGRESS"
    STOP_FAILED = "STOP_FAILED"
    INACTIVE = "INACTIVE"

