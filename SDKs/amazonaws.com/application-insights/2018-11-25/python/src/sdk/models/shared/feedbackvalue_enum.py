from dataclasses import dataclass, field
from typing import Enum

class FeedbackValueEnum(str, Enum):
    NOT_SPECIFIED = "NOT_SPECIFIED"
    USEFUL = "USEFUL"
    NOT_USEFUL = "NOT_USEFUL"

