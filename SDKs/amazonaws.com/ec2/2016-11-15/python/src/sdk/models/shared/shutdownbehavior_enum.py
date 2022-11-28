from dataclasses import dataclass, field
from enum import Enum

class ShutdownBehaviorEnum(str, Enum):
    STOP = "stop"
    TERMINATE = "terminate"

