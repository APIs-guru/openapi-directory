from dataclasses import dataclass, field
from enum import Enum

class ConflictDetectionTypeEnum(str, Enum):
    VERSION = "VERSION"
    NONE = "NONE"

