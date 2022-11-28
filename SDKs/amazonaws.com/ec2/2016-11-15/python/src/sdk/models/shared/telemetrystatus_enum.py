from dataclasses import dataclass, field
from enum import Enum

class TelemetryStatusEnum(str, Enum):
    UP = "UP"
    DOWN = "DOWN"

