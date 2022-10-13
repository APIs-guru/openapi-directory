from dataclasses import dataclass, field
from typing import Enum

class LogTypeEnum(str, Enum):
    SERVER = "server"
    SCHEDULER = "scheduler"

