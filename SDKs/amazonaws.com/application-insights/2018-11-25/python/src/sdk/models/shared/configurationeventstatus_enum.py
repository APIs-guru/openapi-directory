from dataclasses import dataclass, field
from typing import Enum

class ConfigurationEventStatusEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"

