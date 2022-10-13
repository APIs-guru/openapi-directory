from dataclasses import dataclass, field
from typing import Enum

class FilterNameEnum(str, Enum):
    FILE_SYSTEM_ID = "file-system-id"
    BACKUP_TYPE = "backup-type"
    FILE_SYSTEM_TYPE = "file-system-type"
    VOLUME_ID = "volume-id"

