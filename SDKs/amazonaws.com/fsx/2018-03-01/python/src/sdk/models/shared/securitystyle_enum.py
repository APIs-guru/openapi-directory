from dataclasses import dataclass, field
from typing import Enum

class SecurityStyleEnum(str, Enum):
    UNIX = "UNIX"
    NTFS = "NTFS"
    MIXED = "MIXED"

