from dataclasses import dataclass, field
from typing import Enum

class ReprocessingStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

