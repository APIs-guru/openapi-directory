from dataclasses import dataclass, field
from enum import Enum

class RoutingStrategyTypeEnum(str, Enum):
    SIMPLE = "SIMPLE"
    TERMINAL = "TERMINAL"

