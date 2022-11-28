from dataclasses import dataclass, field
from enum import Enum

class ActionStatusEnum(str, Enum):
    SCHEDULED = "Scheduled"
    PENDING = "Pending"
    RUNNING = "Running"
    UNKNOWN = "Unknown"

