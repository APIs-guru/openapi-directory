from dataclasses import dataclass, field
from enum import Enum

class PlatformEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"

