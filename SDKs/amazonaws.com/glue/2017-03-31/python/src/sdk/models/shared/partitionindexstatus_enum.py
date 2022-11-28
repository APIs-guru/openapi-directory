from dataclasses import dataclass, field
from enum import Enum

class PartitionIndexStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"

