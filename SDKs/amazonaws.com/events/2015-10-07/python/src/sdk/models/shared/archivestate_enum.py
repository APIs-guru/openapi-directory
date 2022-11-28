from dataclasses import dataclass, field
from enum import Enum

class ArchiveStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    CREATE_FAILED = "CREATE_FAILED"
    UPDATE_FAILED = "UPDATE_FAILED"

