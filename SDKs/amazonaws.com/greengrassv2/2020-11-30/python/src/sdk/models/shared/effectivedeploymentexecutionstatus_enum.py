from dataclasses import dataclass, field
from typing import Enum

class EffectiveDeploymentExecutionStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    QUEUED = "QUEUED"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    TIMED_OUT = "TIMED_OUT"
    CANCELED = "CANCELED"
    REJECTED = "REJECTED"

