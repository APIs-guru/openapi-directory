from dataclasses import dataclass, field
from enum import Enum

class SnapshotStateEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    ERROR = "error"

