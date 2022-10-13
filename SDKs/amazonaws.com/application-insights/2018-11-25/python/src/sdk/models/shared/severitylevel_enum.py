from dataclasses import dataclass, field
from typing import Enum

class SeverityLevelEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

