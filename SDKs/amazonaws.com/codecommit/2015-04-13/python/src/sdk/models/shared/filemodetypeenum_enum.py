from dataclasses import dataclass, field
from typing import Enum

class FileModeTypeEnumEnum(str, Enum):
    EXECUTABLE = "EXECUTABLE"
    NORMAL = "NORMAL"
    SYMLINK = "SYMLINK"

