from dataclasses import dataclass, field
from typing import Enum

class RemediationExecutionStepStateEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    PENDING = "PENDING"
    FAILED = "FAILED"

