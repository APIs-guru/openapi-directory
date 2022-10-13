from dataclasses import dataclass, field
from typing import Enum

class DesiredStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    PENDING = "PENDING"
    STOPPED = "STOPPED"

