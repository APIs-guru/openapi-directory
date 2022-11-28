from dataclasses import dataclass, field
from enum import Enum

class AvailabilityZoneStateEnum(str, Enum):
    AVAILABLE = "available"
    INFORMATION = "information"
    IMPAIRED = "impaired"
    UNAVAILABLE = "unavailable"

