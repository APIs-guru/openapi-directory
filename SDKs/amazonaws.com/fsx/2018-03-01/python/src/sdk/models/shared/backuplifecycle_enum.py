from dataclasses import dataclass, field
from enum import Enum

class BackupLifecycleEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    TRANSFERRING = "TRANSFERRING"
    DELETED = "DELETED"
    FAILED = "FAILED"
    PENDING = "PENDING"
    COPYING = "COPYING"

