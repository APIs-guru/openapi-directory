from dataclasses import dataclass, field
from typing import Enum

class ContinuousBackupsStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

