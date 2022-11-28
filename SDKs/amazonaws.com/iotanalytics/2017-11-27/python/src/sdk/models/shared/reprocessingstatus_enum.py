from dataclasses import dataclass, field
from enum import Enum

class ReprocessingStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

