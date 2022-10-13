from dataclasses import dataclass, field
from typing import Enum

class MfaModeEnum(str, Enum):
    ON = "ON"
    OFF = "OFF"
    OPTIONAL = "OPTIONAL"

