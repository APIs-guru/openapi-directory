from dataclasses import dataclass, field
from typing import Enum

class ControlSetStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"

