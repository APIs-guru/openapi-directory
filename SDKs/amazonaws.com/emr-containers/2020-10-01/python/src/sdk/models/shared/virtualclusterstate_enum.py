from dataclasses import dataclass, field
from typing import Enum

class VirtualClusterStateEnum(str, Enum):
    RUNNING = "RUNNING"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    ARRESTED = "ARRESTED"

