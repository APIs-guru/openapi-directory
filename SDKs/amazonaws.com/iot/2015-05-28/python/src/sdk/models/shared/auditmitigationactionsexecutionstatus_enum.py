from dataclasses import dataclass, field
from typing import Enum

class AuditMitigationActionsExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"
    SKIPPED = "SKIPPED"
    PENDING = "PENDING"

