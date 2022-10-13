from dataclasses import dataclass, field
from typing import Enum

class ControlTypeEnum(str, Enum):
    STANDARD = "Standard"
    CUSTOM = "Custom"

