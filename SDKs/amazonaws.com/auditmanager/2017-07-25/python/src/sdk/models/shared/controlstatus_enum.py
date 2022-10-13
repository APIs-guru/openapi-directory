from dataclasses import dataclass, field
from typing import Enum

class ControlStatusEnum(str, Enum):
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"
    INACTIVE = "INACTIVE"

