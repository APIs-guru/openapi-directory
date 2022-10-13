from dataclasses import dataclass, field
from typing import Enum

class NotebookExecutionStatusEnum(str, Enum):
    START_PENDING = "START_PENDING"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FINISHING = "FINISHING"
    FINISHED = "FINISHED"
    FAILING = "FAILING"
    FAILED = "FAILED"
    STOP_PENDING = "STOP_PENDING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

