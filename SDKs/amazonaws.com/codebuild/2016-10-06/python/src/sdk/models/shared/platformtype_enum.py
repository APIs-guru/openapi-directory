from dataclasses import dataclass, field
from typing import Enum

class PlatformTypeEnum(str, Enum):
    DEBIAN = "DEBIAN"
    AMAZON_LINUX = "AMAZON_LINUX"
    UBUNTU = "UBUNTU"
    WINDOWS_SERVER = "WINDOWS_SERVER"

