from dataclasses import dataclass, field
from typing import Enum

class BackupStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETED = "DELETED"
    AVAILABLE = "AVAILABLE"

