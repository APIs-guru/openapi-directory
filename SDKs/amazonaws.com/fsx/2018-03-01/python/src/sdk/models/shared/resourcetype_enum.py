from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    FILE_SYSTEM = "FILE_SYSTEM"
    VOLUME = "VOLUME"

