from dataclasses import dataclass, field
from enum import Enum

class BackupStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETED = "DELETED"
    AVAILABLE = "AVAILABLE"

