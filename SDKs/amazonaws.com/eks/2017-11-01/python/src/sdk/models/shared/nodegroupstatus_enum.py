from dataclasses import dataclass, field
from enum import Enum

class NodegroupStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    CREATE_FAILED = "CREATE_FAILED"
    DELETE_FAILED = "DELETE_FAILED"
    DEGRADED = "DEGRADED"

