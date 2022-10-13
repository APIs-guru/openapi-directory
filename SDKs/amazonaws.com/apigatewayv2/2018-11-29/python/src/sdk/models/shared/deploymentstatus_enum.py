from dataclasses import dataclass, field
from typing import Enum

class DeploymentStatusEnum(str, Enum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    DEPLOYED = "DEPLOYED"

