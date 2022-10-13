from dataclasses import dataclass, field
from typing import Enum

class DeploymentStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    INACTIVE = "INACTIVE"

