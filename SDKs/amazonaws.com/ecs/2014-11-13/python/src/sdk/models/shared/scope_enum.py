from dataclasses import dataclass, field
from typing import Enum

class ScopeEnum(str, Enum):
    TASK = "task"
    SHARED = "shared"

