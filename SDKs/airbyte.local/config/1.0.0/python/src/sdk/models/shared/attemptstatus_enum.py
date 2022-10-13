from dataclasses import dataclass, field
from typing import Enum

class AttemptStatusEnum(str, Enum):
    RUNNING = "running"
    FAILED = "failed"
    SUCCEEDED = "succeeded"

