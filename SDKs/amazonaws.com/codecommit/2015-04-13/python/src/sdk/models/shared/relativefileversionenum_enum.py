from dataclasses import dataclass, field
from typing import Enum

class RelativeFileVersionEnumEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"

