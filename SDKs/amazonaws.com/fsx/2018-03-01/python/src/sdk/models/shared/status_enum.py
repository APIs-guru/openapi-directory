from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"
    UPDATED_OPTIMIZING = "UPDATED_OPTIMIZING"

