from dataclasses import dataclass, field
from enum import Enum

class ClusterStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"
    UPDATING = "UPDATING"
    PENDING = "PENDING"

