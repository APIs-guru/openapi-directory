from dataclasses import dataclass, field
from enum import Enum

class RadiusStatusEnum(str, Enum):
    CREATING = "Creating"
    COMPLETED = "Completed"
    FAILED = "Failed"

