from dataclasses import dataclass, field
from typing import Enum

class HsmStateEnum(str, Enum):
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    ACTIVE = "ACTIVE"
    DEGRADED = "DEGRADED"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    DELETED = "DELETED"

