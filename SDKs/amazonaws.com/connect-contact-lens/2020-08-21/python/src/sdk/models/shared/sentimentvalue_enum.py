from dataclasses import dataclass, field
from typing import Enum

class SentimentValueEnum(str, Enum):
    POSITIVE = "POSITIVE"
    NEUTRAL = "NEUTRAL"
    NEGATIVE = "NEGATIVE"

