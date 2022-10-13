from dataclasses import dataclass, field
from typing import Enum

class SnapshotStatusEnum(str, Enum):
    CREATING = "Creating"
    COMPLETED = "Completed"
    FAILED = "Failed"

