from dataclasses import dataclass, field
from enum import Enum

class FindingStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    RESOLVED = "RESOLVED"

