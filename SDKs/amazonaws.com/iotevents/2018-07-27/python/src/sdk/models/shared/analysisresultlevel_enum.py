from dataclasses import dataclass, field
from typing import Enum

class AnalysisResultLevelEnum(str, Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"

