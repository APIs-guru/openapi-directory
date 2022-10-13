from dataclasses import dataclass, field
from typing import Enum

class SeverityEnum(str, Enum):
    INFO = "Info"
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"
    CRITICAL = "Critical"

