from dataclasses import dataclass, field
from typing import Enum

class ReportStatusEnum(str, Enum):
    WORK_IN_PROGRESS = "WORK_IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

