from dataclasses import dataclass, field
from typing import Enum

class FrameworkTypeEnum(str, Enum):
    STANDARD = "Standard"
    CUSTOM = "Custom"

