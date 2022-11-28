from dataclasses import dataclass, field
from enum import Enum

class PolarizationEnum(str, Enum):
    LEFT_HAND = "LEFT_HAND"
    NONE = "NONE"
    RIGHT_HAND = "RIGHT_HAND"

