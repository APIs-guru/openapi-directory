from dataclasses import dataclass, field
from enum import Enum

class RouteStateEnum(str, Enum):
    ACTIVE = "active"
    BLACKHOLE = "blackhole"

