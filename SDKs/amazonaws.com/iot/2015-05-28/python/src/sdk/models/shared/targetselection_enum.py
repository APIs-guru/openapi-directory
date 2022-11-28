from dataclasses import dataclass, field
from enum import Enum

class TargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"

