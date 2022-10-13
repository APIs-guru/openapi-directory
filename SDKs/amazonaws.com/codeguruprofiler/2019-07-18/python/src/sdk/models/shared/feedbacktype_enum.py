from dataclasses import dataclass, field
from typing import Enum

class FeedbackTypeEnum(str, Enum):
    POSITIVE = "Positive"
    NEGATIVE = "Negative"

