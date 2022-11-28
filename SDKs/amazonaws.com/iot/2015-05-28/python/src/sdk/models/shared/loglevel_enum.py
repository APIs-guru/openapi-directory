from dataclasses import dataclass, field
from enum import Enum

class LogLevelEnum(str, Enum):
    DEBUG = "DEBUG"
    INFO = "INFO"
    ERROR = "ERROR"
    WARN = "WARN"
    DISABLED = "DISABLED"

