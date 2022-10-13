from dataclasses import dataclass, field
from typing import Enum

class BgpStatusEnum(str, Enum):
    UP = "up"
    DOWN = "down"
    UNKNOWN = "unknown"

