from dataclasses import dataclass, field
from enum import Enum

class LambdaFunctionRecommendationFindingReasonCodeEnum(str, Enum):
    MEMORY_OVERPROVISIONED = "MemoryOverprovisioned"
    MEMORY_UNDERPROVISIONED = "MemoryUnderprovisioned"
    INSUFFICIENT_DATA = "InsufficientData"
    INCONCLUSIVE = "Inconclusive"

