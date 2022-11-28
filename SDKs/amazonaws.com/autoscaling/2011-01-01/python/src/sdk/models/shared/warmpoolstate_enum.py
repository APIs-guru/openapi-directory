from dataclasses import dataclass, field
from enum import Enum

class WarmPoolStateEnum(str, Enum):
    STOPPED = "Stopped"
    RUNNING = "Running"

