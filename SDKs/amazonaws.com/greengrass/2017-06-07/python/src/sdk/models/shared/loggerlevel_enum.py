from dataclasses import dataclass, field
from enum import Enum

class LoggerLevelEnum(str, Enum):
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"
    FATAL = "FATAL"

