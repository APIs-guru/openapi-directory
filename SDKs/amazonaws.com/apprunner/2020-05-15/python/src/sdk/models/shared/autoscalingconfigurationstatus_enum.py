from dataclasses import dataclass, field
from enum import Enum

class AutoScalingConfigurationStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

