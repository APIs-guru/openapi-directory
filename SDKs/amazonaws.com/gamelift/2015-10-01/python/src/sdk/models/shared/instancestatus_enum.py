from dataclasses import dataclass, field
from typing import Enum

class InstanceStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    TERMINATING = "TERMINATING"

