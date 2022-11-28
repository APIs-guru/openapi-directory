from dataclasses import dataclass, field
from enum import Enum

class ContainerInstanceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DRAINING = "DRAINING"
    REGISTERING = "REGISTERING"
    DEREGISTERING = "DEREGISTERING"
    REGISTRATION_FAILED = "REGISTRATION_FAILED"

