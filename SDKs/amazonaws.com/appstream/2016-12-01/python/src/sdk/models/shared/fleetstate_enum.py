from dataclasses import dataclass, field
from enum import Enum

class FleetStateEnum(str, Enum):
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

