from dataclasses import dataclass, field
from enum import Enum

class AssessmentReportStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"

