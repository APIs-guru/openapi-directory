from dataclasses import dataclass, field
from enum import Enum

class StatusTypeEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

