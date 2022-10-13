from dataclasses import dataclass, field
from typing import Enum

class LogLevelEnum(str, Enum):
    OFF = "OFF"
    BASIC = "BASIC"
    TRANSFER = "TRANSFER"

