from dataclasses import dataclass, field
from enum import Enum

class ConfigurationEventStatusEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"

