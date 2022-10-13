from dataclasses import dataclass, field
from typing import Enum

class ConfidenceLevelEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

