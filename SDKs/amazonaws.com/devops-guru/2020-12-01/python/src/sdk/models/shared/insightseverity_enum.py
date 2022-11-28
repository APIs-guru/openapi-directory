from dataclasses import dataclass, field
from enum import Enum

class InsightSeverityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

