from dataclasses import dataclass, field
from typing import Enum

class EnvironmentStatusEnum(str, Enum):
    ERROR = "error"
    CREATING = "creating"
    CONNECTING = "connecting"
    READY = "ready"
    STOPPING = "stopping"
    STOPPED = "stopped"
    DELETING = "deleting"

