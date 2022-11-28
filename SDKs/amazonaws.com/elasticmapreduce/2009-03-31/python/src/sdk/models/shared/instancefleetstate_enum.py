from dataclasses import dataclass, field
from enum import Enum

class InstanceFleetStateEnum(str, Enum):
    PROVISIONING = "PROVISIONING"
    BOOTSTRAPPING = "BOOTSTRAPPING"
    RUNNING = "RUNNING"
    RESIZING = "RESIZING"
    SUSPENDED = "SUSPENDED"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"

