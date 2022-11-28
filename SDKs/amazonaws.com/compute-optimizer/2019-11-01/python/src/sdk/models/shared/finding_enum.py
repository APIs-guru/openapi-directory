from dataclasses import dataclass, field
from enum import Enum

class FindingEnum(str, Enum):
    UNDERPROVISIONED = "Underprovisioned"
    OVERPROVISIONED = "Overprovisioned"
    OPTIMIZED = "Optimized"
    NOT_OPTIMIZED = "NotOptimized"

