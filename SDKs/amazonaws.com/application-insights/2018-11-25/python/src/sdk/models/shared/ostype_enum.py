from dataclasses import dataclass, field
from enum import Enum

class OsTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"

