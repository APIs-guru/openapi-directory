from dataclasses import dataclass, field
from enum import Enum

class AutoMlOverrideStrategyEnum(str, Enum):
    LATENCY_OPTIMIZED = "LatencyOptimized"

