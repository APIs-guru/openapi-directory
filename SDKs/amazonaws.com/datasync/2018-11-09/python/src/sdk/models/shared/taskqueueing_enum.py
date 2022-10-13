from dataclasses import dataclass, field
from typing import Enum

class TaskQueueingEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

