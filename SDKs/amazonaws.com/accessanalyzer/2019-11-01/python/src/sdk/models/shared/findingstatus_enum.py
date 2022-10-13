from dataclasses import dataclass, field
from typing import Enum

class FindingStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    RESOLVED = "RESOLVED"

