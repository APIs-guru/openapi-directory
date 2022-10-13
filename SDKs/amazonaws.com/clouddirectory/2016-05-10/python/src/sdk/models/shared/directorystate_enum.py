from dataclasses import dataclass, field
from typing import Enum

class DirectoryStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

