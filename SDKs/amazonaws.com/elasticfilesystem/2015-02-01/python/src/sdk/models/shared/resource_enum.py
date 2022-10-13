from dataclasses import dataclass, field
from typing import Enum

class ResourceEnum(str, Enum):
    FILE_SYSTEM = "FILE_SYSTEM"
    MOUNT_TARGET = "MOUNT_TARGET"

