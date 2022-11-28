from dataclasses import dataclass, field
from enum import Enum

class OperationStatusEnum(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    ROLLBACK_IN_PROGRESS = "ROLLBACK_IN_PROGRESS"
    ROLLBACK_FAILED = "ROLLBACK_FAILED"
    ROLLBACK_SUCCEEDED = "ROLLBACK_SUCCEEDED"

