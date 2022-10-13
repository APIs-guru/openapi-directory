from dataclasses import dataclass, field
from typing import Enum

class ClusterStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    UPDATING = "UPDATING"
    PENDING = "PENDING"

