from dataclasses import dataclass, field
from typing import Enum

class StreamViewEnum(str, Enum):
    APP = "APP"
    DESKTOP = "DESKTOP"

