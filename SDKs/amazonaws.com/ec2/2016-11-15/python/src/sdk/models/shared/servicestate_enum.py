from dataclasses import dataclass, field
from enum import Enum

class ServiceStateEnum(str, Enum):
    PENDING = "Pending"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    DELETED = "Deleted"
    FAILED = "Failed"

