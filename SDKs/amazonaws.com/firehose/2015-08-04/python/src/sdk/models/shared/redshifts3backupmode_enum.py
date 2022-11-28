from dataclasses import dataclass, field
from enum import Enum

class RedshiftS3BackupModeEnum(str, Enum):
    DISABLED = "Disabled"
    ENABLED = "Enabled"

