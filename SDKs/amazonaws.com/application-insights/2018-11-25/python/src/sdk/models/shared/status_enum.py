from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    IGNORE = "IGNORE"
    RESOLVED = "RESOLVED"
    PENDING = "PENDING"

