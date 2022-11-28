from dataclasses import dataclass, field
from enum import Enum

class ControlResponseEnum(str, Enum):
    MANUAL = "MANUAL"
    AUTOMATE = "AUTOMATE"
    DEFER = "DEFER"
    IGNORE = "IGNORE"

