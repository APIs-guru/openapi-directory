from dataclasses import dataclass, field
from enum import Enum

class LambdaFilesystemPermissionEnum(str, Enum):
    RO = "ro"
    RW = "rw"

