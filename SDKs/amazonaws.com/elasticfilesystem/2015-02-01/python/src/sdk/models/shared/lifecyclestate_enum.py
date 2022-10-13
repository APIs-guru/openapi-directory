from dataclasses import dataclass, field
from typing import Enum

class LifeCycleStateEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"
    UPDATING = "updating"
    DELETING = "deleting"
    DELETED = "deleted"
    ERROR = "error"

