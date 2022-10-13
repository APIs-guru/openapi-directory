from dataclasses import dataclass, field
from typing import Enum

class ConflictDetectionTypeEnum(str, Enum):
    VERSION = "VERSION"
    NONE = "NONE"

