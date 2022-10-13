from dataclasses import dataclass, field
from typing import Enum

class AnalyzerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DISABLED = "DISABLED"
    FAILED = "FAILED"

