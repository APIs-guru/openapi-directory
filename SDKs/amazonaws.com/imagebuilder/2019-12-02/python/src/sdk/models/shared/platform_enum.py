from dataclasses import dataclass, field
from typing import Enum

class PlatformEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"

