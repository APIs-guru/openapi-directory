from dataclasses import dataclass, field
from enum import Enum

class SeverityLevelEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

