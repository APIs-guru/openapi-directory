from dataclasses import dataclass, field
from typing import Enum

class JobFlowExecutionStateEnum(str, Enum):
    STARTING = "STARTING"
    BOOTSTRAPPING = "BOOTSTRAPPING"
    RUNNING = "RUNNING"
    WAITING = "WAITING"
    SHUTTING_DOWN = "SHUTTING_DOWN"
    TERMINATED = "TERMINATED"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

