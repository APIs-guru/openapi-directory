from dataclasses import dataclass, field
from typing import Enum

class BackupTypeFilterEnum(str, Enum):
    USER = "USER"
    SYSTEM = "SYSTEM"
    AWS_BACKUP = "AWS_BACKUP"
    ALL = "ALL"

