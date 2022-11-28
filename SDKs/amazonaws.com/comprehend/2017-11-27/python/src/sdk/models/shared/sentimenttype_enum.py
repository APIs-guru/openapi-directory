from dataclasses import dataclass, field
from enum import Enum

class SentimentTypeEnum(str, Enum):
    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    MIXED = "MIXED"

