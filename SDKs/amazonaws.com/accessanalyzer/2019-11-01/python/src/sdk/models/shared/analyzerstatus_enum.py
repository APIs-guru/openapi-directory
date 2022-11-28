from dataclasses import dataclass, field
from enum import Enum

class AnalyzerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DISABLED = "DISABLED"
    FAILED = "FAILED"

