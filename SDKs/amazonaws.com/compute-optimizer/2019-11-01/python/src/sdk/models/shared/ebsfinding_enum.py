from dataclasses import dataclass, field
from typing import Enum

class EbsFindingEnum(str, Enum):
    OPTIMIZED = "Optimized"
    NOT_OPTIMIZED = "NotOptimized"

