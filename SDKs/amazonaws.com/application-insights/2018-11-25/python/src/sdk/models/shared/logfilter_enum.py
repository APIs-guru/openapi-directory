from dataclasses import dataclass, field
from typing import Enum

class LogFilterEnum(str, Enum):
    ERROR = "ERROR"
    WARN = "WARN"
    INFO = "INFO"

