from dataclasses import dataclass, field
from enum import Enum

class EnvironmentHealthStatusEnum(str, Enum):
    NO_DATA = "NoData"
    UNKNOWN = "Unknown"
    PENDING = "Pending"
    OK = "Ok"
    INFO = "Info"
    WARNING = "Warning"
    DEGRADED = "Degraded"
    SEVERE = "Severe"
    SUSPENDED = "Suspended"

