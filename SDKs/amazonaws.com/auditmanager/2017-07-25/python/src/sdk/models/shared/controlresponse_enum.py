from dataclasses import dataclass, field
from typing import Enum

class ControlResponseEnum(str, Enum):
    MANUAL = "MANUAL"
    AUTOMATE = "AUTOMATE"
    DEFER = "DEFER"
    IGNORE = "IGNORE"

