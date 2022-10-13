from dataclasses import dataclass, field
from typing import Enum

class CeStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

