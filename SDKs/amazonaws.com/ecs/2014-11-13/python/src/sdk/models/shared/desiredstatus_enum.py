from dataclasses import dataclass, field
from enum import Enum

class DesiredStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    PENDING = "PENDING"
    STOPPED = "STOPPED"

