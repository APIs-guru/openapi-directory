from dataclasses import dataclass, field
from enum import Enum

class PidModeEnum(str, Enum):
    HOST = "host"
    TASK = "task"

