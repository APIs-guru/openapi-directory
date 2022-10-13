from dataclasses import dataclass, field
from typing import Enum

class IpcModeEnum(str, Enum):
    HOST = "host"
    TASK = "task"
    NONE = "none"

