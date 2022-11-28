from dataclasses import dataclass, field
from enum import Enum

class SentimentValueEnum(str, Enum):
    POSITIVE = "POSITIVE"
    NEUTRAL = "NEUTRAL"
    NEGATIVE = "NEGATIVE"

