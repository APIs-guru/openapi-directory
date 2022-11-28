from dataclasses import dataclass, field
from enum import Enum

class ConnectionStateEnum(str, Enum):
    ORDERING = "ordering"
    REQUESTED = "requested"
    PENDING = "pending"
    AVAILABLE = "available"
    DOWN = "down"
    DELETING = "deleting"
    DELETED = "deleted"
    REJECTED = "rejected"
    UNKNOWN = "unknown"

