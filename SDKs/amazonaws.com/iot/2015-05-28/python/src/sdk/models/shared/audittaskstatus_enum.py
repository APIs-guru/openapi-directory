from dataclasses import dataclass, field
from enum import Enum

class AuditTaskStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"

