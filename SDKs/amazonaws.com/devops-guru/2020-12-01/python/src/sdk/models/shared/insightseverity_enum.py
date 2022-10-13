from dataclasses import dataclass, field
from typing import Enum

class InsightSeverityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

