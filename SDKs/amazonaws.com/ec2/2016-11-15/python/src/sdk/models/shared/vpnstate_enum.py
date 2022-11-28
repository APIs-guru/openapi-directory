from dataclasses import dataclass, field
from enum import Enum

class VpnStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

