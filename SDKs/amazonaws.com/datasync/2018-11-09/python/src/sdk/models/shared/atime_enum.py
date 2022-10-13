from dataclasses import dataclass, field
from typing import Enum

class AtimeEnum(str, Enum):
    NONE = "NONE"
    BEST_EFFORT = "BEST_EFFORT"

