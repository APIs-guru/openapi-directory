from dataclasses import dataclass, field
from typing import Enum

class DeploymentRolloutStateEnum(str, Enum):
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"

