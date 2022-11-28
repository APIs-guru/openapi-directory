from dataclasses import dataclass, field
from enum import Enum

class FeedbackValueTypeEnum(str, Enum):
    VALID = "Valid"
    INVALID = "Invalid"

