from dataclasses import dataclass, field
from enum import Enum

class PlatformStatusEnum(str, Enum):
    CREATING = "Creating"
    FAILED = "Failed"
    READY = "Ready"
    DELETING = "Deleting"
    DELETED = "Deleted"

