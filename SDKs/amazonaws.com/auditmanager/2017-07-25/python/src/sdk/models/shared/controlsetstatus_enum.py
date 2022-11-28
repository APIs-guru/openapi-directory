from dataclasses import dataclass, field
from enum import Enum

class ControlSetStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"

