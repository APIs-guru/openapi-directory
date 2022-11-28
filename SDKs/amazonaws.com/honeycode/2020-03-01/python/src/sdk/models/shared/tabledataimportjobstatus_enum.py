from dataclasses import dataclass, field
from enum import Enum

class TableDataImportJobStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

