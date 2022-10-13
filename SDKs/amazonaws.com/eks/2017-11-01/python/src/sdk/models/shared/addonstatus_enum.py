from dataclasses import dataclass, field
from typing import Enum

class AddonStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    CREATE_FAILED = "CREATE_FAILED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETE_FAILED = "DELETE_FAILED"
    DEGRADED = "DEGRADED"

