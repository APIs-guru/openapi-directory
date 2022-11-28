from dataclasses import dataclass, field
from enum import Enum

class ChronologicalOrderEnum(str, Enum):
    REVERSE = "Reverse"
    FORWARD = "Forward"

