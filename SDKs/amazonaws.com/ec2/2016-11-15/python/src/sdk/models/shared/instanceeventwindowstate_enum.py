from dataclasses import dataclass, field
from enum import Enum

class InstanceEventWindowStateEnum(str, Enum):
    CREATING = "creating"
    DELETING = "deleting"
    ACTIVE = "active"
    DELETED = "deleted"

