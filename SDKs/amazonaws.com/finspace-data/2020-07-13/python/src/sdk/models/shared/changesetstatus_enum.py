from dataclasses import dataclass, field
from enum import Enum

class ChangesetStatusEnum(str, Enum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"
    RUNNING = "RUNNING"
    STOP_REQUESTED = "STOP_REQUESTED"

