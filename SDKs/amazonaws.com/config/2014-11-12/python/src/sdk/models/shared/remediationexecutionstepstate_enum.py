from dataclasses import dataclass, field
from enum import Enum

class RemediationExecutionStepStateEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    PENDING = "PENDING"
    FAILED = "FAILED"

