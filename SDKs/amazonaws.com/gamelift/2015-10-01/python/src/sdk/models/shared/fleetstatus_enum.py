from dataclasses import dataclass, field
from typing import Enum

class FleetStatusEnum(str, Enum):
    NEW = "NEW"
    DOWNLOADING = "DOWNLOADING"
    VALIDATING = "VALIDATING"
    BUILDING = "BUILDING"
    ACTIVATING = "ACTIVATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    ERROR = "ERROR"
    TERMINATED = "TERMINATED"

