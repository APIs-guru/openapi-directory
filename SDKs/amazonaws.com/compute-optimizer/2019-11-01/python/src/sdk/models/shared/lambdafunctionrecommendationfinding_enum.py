from dataclasses import dataclass, field
from typing import Enum

class LambdaFunctionRecommendationFindingEnum(str, Enum):
    OPTIMIZED = "Optimized"
    NOT_OPTIMIZED = "NotOptimized"
    UNAVAILABLE = "Unavailable"

