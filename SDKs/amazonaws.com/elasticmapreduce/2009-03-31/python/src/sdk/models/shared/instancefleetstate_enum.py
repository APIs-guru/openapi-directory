from dataclasses import dataclass, field
from typing import Enum

class InstanceFleetStateEnum(str, Enum):
    PROVISIONING = "PROVISIONING"
    BOOTSTRAPPING = "BOOTSTRAPPING"
    RUNNING = "RUNNING"
    RESIZING = "RESIZING"
    SUSPENDED = "SUSPENDED"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"

