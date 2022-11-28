from dataclasses import dataclass, field
from enum import Enum

class VirtualClusterStateEnum(str, Enum):
    RUNNING = "RUNNING"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    ARRESTED = "ARRESTED"

