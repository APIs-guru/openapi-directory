from dataclasses import dataclass, field
from typing import Enum

class PolarizationEnum(str, Enum):
    LEFT_HAND = "LEFT_HAND"
    NONE = "NONE"
    RIGHT_HAND = "RIGHT_HAND"

