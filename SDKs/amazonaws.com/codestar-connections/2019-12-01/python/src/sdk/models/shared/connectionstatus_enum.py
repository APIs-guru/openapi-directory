from dataclasses import dataclass, field
from typing import Enum

class ConnectionStatusEnum(str, Enum):
    PENDING = "PENDING"
    AVAILABLE = "AVAILABLE"
    ERROR = "ERROR"

