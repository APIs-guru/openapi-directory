from dataclasses import dataclass, field
from enum import Enum

class WorkflowRunStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    ERROR = "ERROR"

