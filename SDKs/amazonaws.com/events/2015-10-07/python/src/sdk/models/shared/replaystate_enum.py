from dataclasses import dataclass, field
from enum import Enum

class ReplayStateEnum(str, Enum):
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

