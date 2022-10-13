from dataclasses import dataclass, field
from typing import Enum

class PermissionEnum(str, Enum):
    RO = "ro"
    RW = "rw"

