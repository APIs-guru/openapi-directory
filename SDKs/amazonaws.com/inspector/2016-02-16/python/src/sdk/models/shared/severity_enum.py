from dataclasses import dataclass, field
from enum import Enum

class SeverityEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"
    INFORMATIONAL = "Informational"
    UNDEFINED = "Undefined"

