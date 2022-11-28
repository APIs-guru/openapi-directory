from dataclasses import dataclass, field
from enum import Enum

class AtimeEnum(str, Enum):
    NONE = "NONE"
    BEST_EFFORT = "BEST_EFFORT"

