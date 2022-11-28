from dataclasses import dataclass, field
from enum import Enum

class ConfigurationDeploymentStatusEnum(str, Enum):
    DEPLOYED = "deployed"
    PENDING = "pending"
    FAILED = "failed"

