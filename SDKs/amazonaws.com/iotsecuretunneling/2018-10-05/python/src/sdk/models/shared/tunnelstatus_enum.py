from dataclasses import dataclass, field
from typing import Enum

class TunnelStatusEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

