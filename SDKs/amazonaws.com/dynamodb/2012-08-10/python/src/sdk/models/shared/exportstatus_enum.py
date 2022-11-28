from dataclasses import dataclass, field
from enum import Enum

class ExportStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

