from dataclasses import dataclass, field
from typing import Enum

class AssessmentStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

