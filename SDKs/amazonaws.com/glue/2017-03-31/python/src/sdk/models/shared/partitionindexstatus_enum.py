from dataclasses import dataclass, field
from typing import Enum

class PartitionIndexStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"

