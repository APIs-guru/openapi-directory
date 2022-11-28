from dataclasses import dataclass, field
from enum import Enum

class ControlTypeEnum(str, Enum):
    STANDARD = "Standard"
    CUSTOM = "Custom"

