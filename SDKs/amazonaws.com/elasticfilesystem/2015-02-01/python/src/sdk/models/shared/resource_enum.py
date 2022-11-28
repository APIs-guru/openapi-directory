from dataclasses import dataclass, field
from enum import Enum

class ResourceEnum(str, Enum):
    FILE_SYSTEM = "FILE_SYSTEM"
    MOUNT_TARGET = "MOUNT_TARGET"

