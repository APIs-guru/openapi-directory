from dataclasses import dataclass, field
from enum import Enum

class StreamViewEnum(str, Enum):
    APP = "APP"
    DESKTOP = "DESKTOP"

