from dataclasses import dataclass, field
from typing import Enum

class CostEstimationStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    COMPLETED = "COMPLETED"

