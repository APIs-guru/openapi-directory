from dataclasses import dataclass, field
from typing import Enum

class TaskStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    UNAVAILABLE = "UNAVAILABLE"

