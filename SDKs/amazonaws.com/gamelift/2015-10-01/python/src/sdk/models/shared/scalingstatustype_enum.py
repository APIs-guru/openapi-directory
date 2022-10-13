from dataclasses import dataclass, field
from typing import Enum

class ScalingStatusTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    UPDATE_REQUESTED = "UPDATE_REQUESTED"
    UPDATING = "UPDATING"
    DELETE_REQUESTED = "DELETE_REQUESTED"
    DELETING = "DELETING"
    DELETED = "DELETED"
    ERROR = "ERROR"

