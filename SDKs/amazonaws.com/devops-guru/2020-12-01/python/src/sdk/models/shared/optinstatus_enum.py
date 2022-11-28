from dataclasses import dataclass, field
from enum import Enum

class OptInStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

