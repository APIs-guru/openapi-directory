from dataclasses import dataclass, field
from enum import Enum

class EbsFindingEnum(str, Enum):
    OPTIMIZED = "Optimized"
    NOT_OPTIMIZED = "NotOptimized"

