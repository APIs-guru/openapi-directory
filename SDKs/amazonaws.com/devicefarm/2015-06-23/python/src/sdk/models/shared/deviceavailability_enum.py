from dataclasses import dataclass, field
from enum import Enum

class DeviceAvailabilityEnum(str, Enum):
    TEMPORARY_NOT_AVAILABLE = "TEMPORARY_NOT_AVAILABLE"
    BUSY = "BUSY"
    AVAILABLE = "AVAILABLE"
    HIGHLY_AVAILABLE = "HIGHLY_AVAILABLE"

