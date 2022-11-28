from dataclasses import dataclass, field
from enum import Enum

class InstanceStateNameEnum(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    SHUTTING_DOWN = "shutting-down"
    TERMINATED = "terminated"
    STOPPING = "stopping"
    STOPPED = "stopped"

