from dataclasses import dataclass, field
from enum import Enum

class LambdaFunctionRecommendationFindingEnum(str, Enum):
    OPTIMIZED = "Optimized"
    NOT_OPTIMIZED = "NotOptimized"
    UNAVAILABLE = "Unavailable"

