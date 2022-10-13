from dataclasses import dataclass, field
from typing import Enum

class PidModeEnum(str, Enum):
    HOST = "host"
    TASK = "task"

