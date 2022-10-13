from dataclasses import dataclass, field
from typing import Enum

class LambdaFilesystemPermissionEnum(str, Enum):
    RO = "ro"
    RW = "rw"

