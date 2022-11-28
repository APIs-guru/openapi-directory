from dataclasses import dataclass, field
from enum import Enum

class IpcModeEnum(str, Enum):
    HOST = "host"
    TASK = "task"
    NONE = "none"

