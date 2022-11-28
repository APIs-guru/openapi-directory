from dataclasses import dataclass, field
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    PENDING_HANDSHAKE = "PENDING_HANDSHAKE"
    AVAILABLE = "AVAILABLE"
    ERROR = "ERROR"
    DELETED = "DELETED"

