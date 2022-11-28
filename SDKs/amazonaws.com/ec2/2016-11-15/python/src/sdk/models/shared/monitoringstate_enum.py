from dataclasses import dataclass, field
from enum import Enum

class MonitoringStateEnum(str, Enum):
    DISABLED = "disabled"
    DISABLING = "disabling"
    ENABLED = "enabled"
    PENDING = "pending"

