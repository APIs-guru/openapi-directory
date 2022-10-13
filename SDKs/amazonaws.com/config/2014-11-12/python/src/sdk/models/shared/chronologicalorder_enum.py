from dataclasses import dataclass, field
from typing import Enum

class ChronologicalOrderEnum(str, Enum):
    REVERSE = "Reverse"
    FORWARD = "Forward"

