from dataclasses import dataclass, field
from enum import Enum

class DeploymentStatusEnum(str, Enum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    DEPLOYED = "DEPLOYED"

