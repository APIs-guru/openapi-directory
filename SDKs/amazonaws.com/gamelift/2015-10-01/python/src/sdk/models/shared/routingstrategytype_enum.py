from dataclasses import dataclass, field
from typing import Enum

class RoutingStrategyTypeEnum(str, Enum):
    SIMPLE = "SIMPLE"
    TERMINAL = "TERMINAL"

