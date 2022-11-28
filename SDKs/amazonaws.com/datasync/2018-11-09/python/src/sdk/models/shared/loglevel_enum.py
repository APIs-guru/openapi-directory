from dataclasses import dataclass, field
from enum import Enum

class LogLevelEnum(str, Enum):
    OFF = "OFF"
    BASIC = "BASIC"
    TRANSFER = "TRANSFER"

