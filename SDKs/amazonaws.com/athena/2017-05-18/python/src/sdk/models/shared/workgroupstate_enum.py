from dataclasses import dataclass, field
from enum import Enum

class WorkGroupStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

