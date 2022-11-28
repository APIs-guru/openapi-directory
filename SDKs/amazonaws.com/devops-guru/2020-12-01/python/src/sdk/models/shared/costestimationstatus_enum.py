from dataclasses import dataclass, field
from enum import Enum

class CostEstimationStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    COMPLETED = "COMPLETED"

