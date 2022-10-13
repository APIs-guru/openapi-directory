from dataclasses import dataclass, field
from typing import Enum

class StabilityStatusEnum(str, Enum):
    STEADY_STATE = "STEADY_STATE"
    STABILIZING = "STABILIZING"

