from dataclasses import dataclass, field
from enum import Enum

class ScalingStatusCodeEnum(str, Enum):
    INACTIVE = "Inactive"
    PARTIALLY_ACTIVE = "PartiallyActive"
    ACTIVE = "Active"

