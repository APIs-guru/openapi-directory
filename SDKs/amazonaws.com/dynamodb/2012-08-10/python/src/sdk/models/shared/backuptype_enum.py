from dataclasses import dataclass, field
from enum import Enum

class BackupTypeEnum(str, Enum):
    USER = "USER"
    SYSTEM = "SYSTEM"
    AWS_BACKUP = "AWS_BACKUP"

