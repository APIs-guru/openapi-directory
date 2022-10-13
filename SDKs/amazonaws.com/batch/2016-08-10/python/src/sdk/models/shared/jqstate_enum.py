from dataclasses import dataclass, field
from typing import Enum

class JqStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

