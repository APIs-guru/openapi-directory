from dataclasses import dataclass, field
from typing import Enum

class OsTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"

