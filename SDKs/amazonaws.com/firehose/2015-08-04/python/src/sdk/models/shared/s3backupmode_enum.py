from dataclasses import dataclass, field
from typing import Enum

class S3BackupModeEnum(str, Enum):
    DISABLED = "Disabled"
    ENABLED = "Enabled"

