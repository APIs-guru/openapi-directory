from dataclasses import dataclass, field
from enum import Enum

class TelemetryEnum(str, Enum):
    ON = "On"
    OFF = "Off"

