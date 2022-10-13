from dataclasses import dataclass, field
from typing import Enum

class RedshiftS3BackupModeEnum(str, Enum):
    DISABLED = "Disabled"
    ENABLED = "Enabled"

