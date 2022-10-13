from dataclasses import dataclass, field
from typing import Enum

class LoggingLevelEnum(str, Enum):
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"

