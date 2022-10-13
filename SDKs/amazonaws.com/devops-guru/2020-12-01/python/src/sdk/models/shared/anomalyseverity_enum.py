from dataclasses import dataclass, field
from typing import Enum

class AnomalySeverityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

