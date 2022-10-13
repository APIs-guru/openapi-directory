from dataclasses import dataclass, field
from typing import Enum

class OptInStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

