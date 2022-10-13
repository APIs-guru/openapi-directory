from dataclasses import dataclass, field
from typing import Enum

class FindingSeverityEnum(str, Enum):
    INFORMATIONAL = "INFORMATIONAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"
    UNDEFINED = "UNDEFINED"

