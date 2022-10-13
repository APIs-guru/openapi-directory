from dataclasses import dataclass, field
from typing import Enum

class StatusTypeEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

