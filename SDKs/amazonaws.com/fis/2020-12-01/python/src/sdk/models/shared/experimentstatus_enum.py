from dataclasses import dataclass, field
from typing import Enum

class ExperimentStatusEnum(str, Enum):
    PENDING = "pending"
    INITIATING = "initiating"
    RUNNING = "running"
    COMPLETED = "completed"
    STOPPING = "stopping"
    STOPPED = "stopped"
    FAILED = "failed"

