from dataclasses import dataclass, field
from enum import Enum

class ActionHistoryStatusEnum(str, Enum):
    COMPLETED = "Completed"
    FAILED = "Failed"
    UNKNOWN = "Unknown"

