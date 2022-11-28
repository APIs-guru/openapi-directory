from dataclasses import dataclass, field
from enum import Enum

class ContinuousBackupsStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

