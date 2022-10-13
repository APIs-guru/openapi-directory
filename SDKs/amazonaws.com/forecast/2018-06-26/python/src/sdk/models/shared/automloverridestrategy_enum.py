from dataclasses import dataclass, field
from typing import Enum

class AutoMlOverrideStrategyEnum(str, Enum):
    LATENCY_OPTIMIZED = "LatencyOptimized"

