from dataclasses import dataclass, field
from enum import Enum

class TunnelStatusEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

