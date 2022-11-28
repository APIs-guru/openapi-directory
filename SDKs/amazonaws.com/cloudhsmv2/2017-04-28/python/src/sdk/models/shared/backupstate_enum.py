from dataclasses import dataclass, field
from enum import Enum

class BackupStateEnum(str, Enum):
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    READY = "READY"
    DELETED = "DELETED"
    PENDING_DELETION = "PENDING_DELETION"

