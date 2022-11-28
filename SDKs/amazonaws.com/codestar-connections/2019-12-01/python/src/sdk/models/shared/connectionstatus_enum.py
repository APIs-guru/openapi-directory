from dataclasses import dataclass, field
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    PENDING = "PENDING"
    AVAILABLE = "AVAILABLE"
    ERROR = "ERROR"

