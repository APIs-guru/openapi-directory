from dataclasses import dataclass, field
from typing import Enum

class AutoScalingConfigurationStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

