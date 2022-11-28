from dataclasses import dataclass, field
from enum import Enum

class ConfidenceLevelEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

