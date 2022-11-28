from dataclasses import dataclass, field
from enum import Enum

class TaskQueueingEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

