from dataclasses import dataclass, field
from typing import Enum

class FeedbackValueTypeEnum(str, Enum):
    VALID = "Valid"
    INVALID = "Invalid"

