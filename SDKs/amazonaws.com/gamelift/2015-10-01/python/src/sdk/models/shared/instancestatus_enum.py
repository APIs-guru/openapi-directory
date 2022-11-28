from dataclasses import dataclass, field
from enum import Enum

class InstanceStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    TERMINATING = "TERMINATING"

