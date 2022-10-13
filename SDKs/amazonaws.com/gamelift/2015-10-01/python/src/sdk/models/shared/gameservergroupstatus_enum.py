from dataclasses import dataclass, field
from typing import Enum

class GameServerGroupStatusEnum(str, Enum):
    NEW = "NEW"
    ACTIVATING = "ACTIVATING"
    ACTIVE = "ACTIVE"
    DELETE_SCHEDULED = "DELETE_SCHEDULED"
    DELETING = "DELETING"
    DELETED = "DELETED"
    ERROR = "ERROR"

