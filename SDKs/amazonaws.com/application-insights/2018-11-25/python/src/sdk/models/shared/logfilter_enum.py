from dataclasses import dataclass, field
from enum import Enum

class LogFilterEnum(str, Enum):
    ERROR = "ERROR"
    WARN = "WARN"
    INFO = "INFO"

