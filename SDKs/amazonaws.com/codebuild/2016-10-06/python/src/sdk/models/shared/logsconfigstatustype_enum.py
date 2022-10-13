from dataclasses import dataclass, field
from typing import Enum

class LogsConfigStatusTypeEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

