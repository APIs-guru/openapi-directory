from dataclasses import dataclass, field
from typing import Enum

class TrafficRoutingTypeEnum(str, Enum):
    TIME_BASED_CANARY = "TimeBasedCanary"
    TIME_BASED_LINEAR = "TimeBasedLinear"
    ALL_AT_ONCE = "AllAtOnce"

