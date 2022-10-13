from dataclasses import dataclass, field
from typing import Enum

class FleetStateEnum(str, Enum):
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

