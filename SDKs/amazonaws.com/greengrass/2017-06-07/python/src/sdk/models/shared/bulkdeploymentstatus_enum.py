from dataclasses import dataclass, field
from typing import Enum

class BulkDeploymentStatusEnum(str, Enum):
    INITIALIZING = "Initializing"
    RUNNING = "Running"
    COMPLETED = "Completed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"
    FAILED = "Failed"

