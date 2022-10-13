from dataclasses import dataclass, field
from typing import Enum

class InstalledComponentLifecycleStateEnum(str, Enum):
    NEW = "NEW"
    INSTALLED = "INSTALLED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"
    ERRORED = "ERRORED"
    BROKEN = "BROKEN"
    FINISHED = "FINISHED"

