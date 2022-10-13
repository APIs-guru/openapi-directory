from dataclasses import dataclass, field
from typing import Enum

class TelemetryEnum(str, Enum):
    ON = "On"
    OFF = "Off"

