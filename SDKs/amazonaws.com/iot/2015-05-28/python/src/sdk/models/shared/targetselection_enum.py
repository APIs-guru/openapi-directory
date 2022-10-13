from dataclasses import dataclass, field
from typing import Enum

class TargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"

