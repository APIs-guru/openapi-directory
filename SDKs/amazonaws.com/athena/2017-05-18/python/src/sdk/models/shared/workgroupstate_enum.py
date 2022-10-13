from dataclasses import dataclass, field
from typing import Enum

class WorkGroupStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

