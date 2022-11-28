from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    IGNORE = "IGNORE"
    RESOLVED = "RESOLVED"
    PENDING = "PENDING"

