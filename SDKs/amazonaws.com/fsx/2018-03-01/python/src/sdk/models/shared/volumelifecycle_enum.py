from dataclasses import dataclass, field
from enum import Enum

class VolumeLifecycleEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"
    FAILED = "FAILED"
    MISCONFIGURED = "MISCONFIGURED"
    PENDING = "PENDING"

