from dataclasses import dataclass, field
from enum import Enum

class ScalingActivityStatusCodeEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    SUCCESSFUL = "Successful"
    OVERRIDDEN = "Overridden"
    UNFULFILLED = "Unfulfilled"
    FAILED = "Failed"

