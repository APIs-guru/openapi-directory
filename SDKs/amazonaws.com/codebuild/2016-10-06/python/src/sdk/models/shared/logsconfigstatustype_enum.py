from dataclasses import dataclass, field
from enum import Enum

class LogsConfigStatusTypeEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

