from dataclasses import dataclass, field
from enum import Enum

class InstanceMetadataOptionsStateEnum(str, Enum):
    PENDING = "pending"
    APPLIED = "applied"

