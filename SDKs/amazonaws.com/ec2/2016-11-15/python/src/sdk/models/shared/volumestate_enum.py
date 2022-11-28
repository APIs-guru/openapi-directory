from dataclasses import dataclass, field
from enum import Enum

class VolumeStateEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"
    IN_USE = "in-use"
    DELETING = "deleting"
    DELETED = "deleted"
    ERROR = "error"

