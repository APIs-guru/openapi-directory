from dataclasses import dataclass, field
from enum import Enum

class ClusterStateEnum(str, Enum):
    STARTING = "STARTING"
    BOOTSTRAPPING = "BOOTSTRAPPING"
    RUNNING = "RUNNING"
    WAITING = "WAITING"
    TERMINATING = "TERMINATING"
    TERMINATED = "TERMINATED"
    TERMINATED_WITH_ERRORS = "TERMINATED_WITH_ERRORS"

