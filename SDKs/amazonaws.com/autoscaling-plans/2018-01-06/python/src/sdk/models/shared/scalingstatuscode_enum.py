from dataclasses import dataclass, field
from typing import Enum

class ScalingStatusCodeEnum(str, Enum):
    INACTIVE = "Inactive"
    PARTIALLY_ACTIVE = "PartiallyActive"
    ACTIVE = "Active"

