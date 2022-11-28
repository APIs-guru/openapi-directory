from dataclasses import dataclass, field
from enum import Enum

class DeploymentWaitTypeEnum(str, Enum):
    READY_WAIT = "READY_WAIT"
    TERMINATION_WAIT = "TERMINATION_WAIT"

