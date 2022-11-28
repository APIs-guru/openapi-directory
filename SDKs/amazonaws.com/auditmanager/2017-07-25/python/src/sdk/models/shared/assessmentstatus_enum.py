from dataclasses import dataclass, field
from enum import Enum

class AssessmentStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

