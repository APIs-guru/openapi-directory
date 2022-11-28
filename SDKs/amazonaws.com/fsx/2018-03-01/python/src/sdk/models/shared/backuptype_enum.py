from dataclasses import dataclass, field
from enum import Enum

class BackupTypeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    USER_INITIATED = "USER_INITIATED"
    AWS_BACKUP = "AWS_BACKUP"

