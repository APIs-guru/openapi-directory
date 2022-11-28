from dataclasses import dataclass, field
from enum import Enum

class ValidationSeverityEnum(str, Enum):
    ERROR = "error"
    WARNING = "warning"

