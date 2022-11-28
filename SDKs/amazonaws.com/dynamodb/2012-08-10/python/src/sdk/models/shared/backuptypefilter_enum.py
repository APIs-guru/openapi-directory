from dataclasses import dataclass, field
from enum import Enum

class BackupTypeFilterEnum(str, Enum):
    USER = "USER"
    SYSTEM = "SYSTEM"
    AWS_BACKUP = "AWS_BACKUP"
    ALL = "ALL"

