from dataclasses import dataclass, field
from enum import Enum

class ArtifactStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    IN_PROGRESS = "IN_PROGRESS"

