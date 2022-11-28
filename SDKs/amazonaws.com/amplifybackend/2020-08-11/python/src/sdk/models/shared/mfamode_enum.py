from dataclasses import dataclass, field
from enum import Enum

class MfaModeEnum(str, Enum):
    ON = "ON"
    OFF = "OFF"
    OPTIONAL = "OPTIONAL"

