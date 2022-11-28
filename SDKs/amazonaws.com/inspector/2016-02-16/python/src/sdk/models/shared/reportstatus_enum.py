from dataclasses import dataclass, field
from enum import Enum

class ReportStatusEnum(str, Enum):
    WORK_IN_PROGRESS = "WORK_IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

