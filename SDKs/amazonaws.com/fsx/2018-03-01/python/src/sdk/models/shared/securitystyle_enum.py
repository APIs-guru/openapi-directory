from dataclasses import dataclass, field
from enum import Enum

class SecurityStyleEnum(str, Enum):
    UNIX = "UNIX"
    NTFS = "NTFS"
    MIXED = "MIXED"

