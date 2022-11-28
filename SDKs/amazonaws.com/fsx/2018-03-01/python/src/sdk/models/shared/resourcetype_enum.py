from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeEnum(str, Enum):
    FILE_SYSTEM = "FILE_SYSTEM"
    VOLUME = "VOLUME"

