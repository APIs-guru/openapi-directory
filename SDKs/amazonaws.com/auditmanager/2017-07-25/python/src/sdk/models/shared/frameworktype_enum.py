from dataclasses import dataclass, field
from enum import Enum

class FrameworkTypeEnum(str, Enum):
    STANDARD = "Standard"
    CUSTOM = "Custom"

