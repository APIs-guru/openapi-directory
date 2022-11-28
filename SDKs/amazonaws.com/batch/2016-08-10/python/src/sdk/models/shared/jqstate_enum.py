from dataclasses import dataclass, field
from enum import Enum

class JqStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

