from dataclasses import dataclass, field
from enum import Enum

class AnomalySeverityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

