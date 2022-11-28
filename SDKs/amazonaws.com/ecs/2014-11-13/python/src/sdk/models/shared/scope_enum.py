from dataclasses import dataclass, field
from enum import Enum

class ScopeEnum(str, Enum):
    TASK = "task"
    SHARED = "shared"

